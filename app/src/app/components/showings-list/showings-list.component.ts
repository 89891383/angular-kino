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
  selectedDate = '';
  inputValue = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getShowings();
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
      });
  }

  onSelectedDate() {
    this.selectedDate = this.addShowingForm.value.date;
    this.inputValue = this.addShowingForm.value.date;
  }
}
