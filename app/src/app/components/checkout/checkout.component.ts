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
    this.onSelectedDate();

    let hour = '18:46';
    let a = hour.split(':');
    let hourMiliseconds = (+a[0] - 1) * 3600 * 1000 + +a[1] * 60 * 1000;
    let dateMiliseconds = Date.parse(stringToday);
    let time = new Date(hourMiliseconds + dateMiliseconds);
    console.log(Number(today));
    console.log(Number(time));
    if (Number(today) <= Number(time)) console.log('TAK');
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
