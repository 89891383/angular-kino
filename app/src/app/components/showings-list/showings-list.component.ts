import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-showings-list',
  templateUrl: './showings-list.component.html',
  styleUrls: ['./showings-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ShowingsListComponent implements OnInit {
  @ViewChild('f') addShowingForm: NgForm;
  faPlusSquare = faPlusSquare;
  dataArray = [];
  filteredDataArray = [];
  selectedDate = '';
  inputValue = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getShowings();

    // let today = new Date();
    // let year = today.getFullYear();
    // let monthNumber = today.getMonth() + 1;
    // let dayNumber = today.getDate();

    // let month;
    // let day;

    // if (monthNumber < 10) month = '0' + monthNumber.toString();
    // else month = monthNumber.toString();
    // if (dayNumber < 10) day = '0' + dayNumber.toString();
    // else day = dayNumber.toString();

    // let date = year + '-' + month + '-' + day;
    // 1;

    // this.selectedDate = date;
  }

  getShowings() {
    this.http
      .get('http://localhost:4201/orders')
      .pipe(
        map((responseData) => {
          const showingsArray = [];

          for (let key in responseData) {
            showingsArray.push({ ...responseData[key] });
          }

          return showingsArray;
        })
      )
      .subscribe((dataArray) => {
        this.dataArray = dataArray;
        //this.filteredDataArray = dataArray;
      });
  }

  onSelectedDate() {
    this.selectedDate = this.addShowingForm.value.date;

    this.filteredDataArray = this.dataArray.map((element) => ({
      ...element,
      showings: element.showings.filter(
        (showing) => showing.date === this.selectedDate
      ),
    }));

    this.filteredDataArray = this.filteredDataArray.filter(
      (element) => element.showings.length > 0
    );
  }
}
