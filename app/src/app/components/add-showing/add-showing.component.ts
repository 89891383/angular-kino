import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-showing',
  templateUrl: './add-showing.component.html',
  styleUrls: ['./add-showing.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AddShowingComponent implements OnInit {
  @ViewChild('f') addShowingForm: NgForm;

  faArrowLeft = faArrowLeft;
  films = [];
  cinemaHalls = [
    {
      hallId: 1,
      capacity: 40,
      body: [
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: true },
          { id: 4, isActive: true },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
      ],
      numberOfSeatsSold: 0,
      numberOfAvaibleSeats: 40,
    },
    {
      hallId: 2,
      capacity: 40,
      body: [
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: true },
          { id: 4, isActive: true },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
      ],
      numberOfSeatsSold: 0,
      numberOfAvaibleSeats: 40,
    },
    {
      hallId: 3,
      capacity: 40,
      body: [
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: false },
          { id: 4, isActive: false },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
        [
          { id: 1, isActive: false },
          { id: 2, isActive: false },
          { id: 3, isActive: true },
          { id: 4, isActive: true },
          { id: 5, isActive: false },
          { id: 6, isActive: false },
          { id: 7, isActive: false },
          { id: 8, isActive: false },
        ],
      ],
      numberOfSeatsSold: 0,
      numberOfAvaibleSeats: 40,
    },
  ];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.http
      .get('http://localhost:4201/orders')
      .pipe(
        map((responseData) => {
          const dataArray = [];

          for (let key in responseData) {
            dataArray.push({ ...responseData[key] });
          }

          return dataArray;
        })
      )
      .subscribe((dataArray) => {
        this.films = dataArray.map((data) => data);
      });
  }

  onSubmit() {
    const selectedFilm = this.addShowingForm.value.title;

    const newShowing = {
      id: selectedFilm.id,
      title: selectedFilm.title,
      duration: selectedFilm.duration,
      imageUrl: selectedFilm.imageUrl,
      showings: [
        ...selectedFilm.showings,
        {
          showingId: Math.floor(Math.random() * (100000000 - 10)) + 10,
          date: this.addShowingForm.value.timeGroup.date,
          hour: this.addShowingForm.value.timeGroup.hour,
          occupiedSeats: [],
          cinemaHall: this.addShowingForm.value.cinemaHall,
        },
      ],
    };

    this.http
      .put(`http://localhost:4201/orders/${selectedFilm.id}`, newShowing)
      .subscribe(() => {
        this.addShowingForm.reset();
        this.router.navigate(['/showings']);
      });
  }
}
