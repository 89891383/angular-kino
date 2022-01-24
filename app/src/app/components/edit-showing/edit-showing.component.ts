import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  Input,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-showing',
  templateUrl: './edit-showing.component.html',
  styleUrls: ['./edit-showing.component.css'],

  encapsulation: ViewEncapsulation.None,
})
export class EditShowingComponent implements OnInit {
  @ViewChild('f') editShowingForm: NgForm;
  faArrowLeft = faArrowLeft;
  films = [];
  film = {};
  previousFilmTitle = '';
  previousFilmCinemaHall = '';
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
  // film = {
  //   id: 0,
  //   title: '',
  //   duration: '',
  //   imageUrl: '',
  //   showings: [],
  // };
  id = '0';

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getData();
    //this.searchThatShowing();
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
        this.searchThatShowing(dataArray);
      });
  }

  searchThatShowing(array: Array<object>) {
    let foundFilm = {};
    let foundShow = {};

    this.films.map((film) => {
      const tmp = film.showings.find(
        (showing: object) => showing['showingId'] == this.id
      );
      if (tmp) {
        this.film = tmp;
        foundFilm = film;
        foundShow = tmp;
      }
    });
    //zapisuje poprzedni tytuł, żeby wiedzieć czy się zmienił
    this.previousFilmTitle = foundFilm['title'];

    //podmieniam sale kinową ze stanu, która ma id starej sali na starą salę
    this.cinemaHalls[foundShow['cinemaHall'].hallId - 1] =
      foundShow['cinemaHall'];

    // ustawienia początkowe formularza
    this.editShowingForm.form.setValue({
      title: foundFilm,
      cinemaHall: this.cinemaHalls[foundShow['cinemaHall'].hallId - 1],
      date: foundShow['date'],
      hour: foundShow['hour'],
    });
  }

  onSubmit() {
    //jeśli to ten sam film, ale zmieniła się sala/data/godzina
    if (this.editShowingForm.value.title['title'] === this.previousFilmTitle) {
      // const newShowing = {
      //   id: this.film["id"],
      //   title: this.film["title"],
      //   duration: this.film["duration"],
      //   imageUrl: this.film["imageUrl"],
      //   showings: [
      //     ...selectedFilm.showings,
      //     {
      //       showingId: Math.floor(Math.random() * (100000000 - 10)) + 10,
      //       date: this.addShowingForm.value.date,
      //       hour: this.addShowingForm.value.hour,
      //       occupiedSeats: [],
      //       cinemaHall: this.addShowingForm.value.cinemaHall,
      //     },
      //   ],
      // };
      // console.log('tak');
      // this.http
      // .put(`http://localhost:4201/orders/${this.film["id"]}`, newShowing)
      // .subscribe(() => {
      //   this.addShowingForm.reset();
      //   this.router.navigate(['/showings']);
      // });
    }
    //jeśli to inny film
    else {
    }
    // this.http
    //   .put(`http://localhost:4201/orders/${this.id}`, {
    //     id: this.id,
    //     title: this.editFilmForm.value.title,
    //     duration: this.editFilmForm.value.duration,
    //     imageUrl: this.editFilmForm.value.url,
    //     showings: this.film.showings,
    //   })
    //   .subscribe(() => {
    //     this.editFilmForm.reset();
    //     this.router.navigate(['/films']);
    //   });
  }
}
