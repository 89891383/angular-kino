import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CheckoutComponent implements OnInit {
  @ViewChild('f') addShowingForm: NgForm;
  faPlusSquare = faPlusSquare;
  dataArray = [];
  filteredDataArray = [];
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
        this.setTodayDate();
      });
  }
  setTodayDate() {
    let today = new Date();

    let stringToday =
      today.getFullYear() +
      '-' +
      ('0' + (today.getMonth() + 1)).slice(-2) +
      '-' +
      ('0' + today.getDate()).slice(-2);

    this.addShowingForm.setValue({
      date: stringToday,
    });

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

    let dateMiliseconds = Date.parse(stringToday);
    let hourMilisecondsIn = 0;
    let b: any;
    let time2: Date;

    this.filteredDataArray = this.filteredDataArray.map((element) => {
      element.showings = element.showings.filter((el) => {
        b = el.hour.split(':');
        hourMilisecondsIn = (+b[0] - 1) * 3600 * 1000 + +b[1] * 60 * 1000;
        time2 = new Date(hourMilisecondsIn + dateMiliseconds);

        if (Number(today) <= Number(time2)) return true;
        else return false;
      });
      return element;
    });

    this.filteredDataArray = this.filteredDataArray.filter(
      (element) => element.showings.length > 0
    );
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
