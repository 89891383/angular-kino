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
  showing = {};
  previousFilmTitle = '';
  previousFilmCinemaHallId = 0;
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
        (showing: object) => parseInt(showing['showingId']) == parseInt(this.id)
      );
      if (tmp) {
        this.film = film;
        this.showing = tmp;
        foundFilm = film;
        foundShow = tmp;
      }
    });
    //zapisuje poprzedni tytuł i idSali, żeby wiedzieć czy się zmieniło
    this.previousFilmTitle = foundFilm['title'];
    this.previousFilmCinemaHallId = foundShow['cinemaHall'].hallId;

    //podmieniam sale kinową ze stanu, która ma id starej sali na starą salę
    this.cinemaHalls[foundShow['cinemaHall'].hallId - 1] =
      foundShow['cinemaHall'];

    // ustawienia początkowe formularza
    this.editShowingForm.form.setValue({
      title: foundFilm,
      cinemaHall: this.cinemaHalls[foundShow['cinemaHall'].hallId - 1],
      timeGroup: {
        date: foundShow['date'],
        hour: foundShow['hour'],
      },
    });
  }

  onSubmit() {
    //SALA - warunki

    //jeśli sala się nie zmieniła, to do zmiennej editedCinemaHall przypisuje starą sale
    let editedCinemaHall = {};
    if (
      this.editShowingForm.value.cinemaHall['hallId'] ==
      this.previousFilmCinemaHallId
    ) {
      editedCinemaHall =
        this.cinemaHalls[this.showing['cinemaHall'].hallId - 1];
    }
    //jeśli się zmieniła to zmieniam jej Id, a ciało i miejsca przepisuje ze starej
    else {
      editedCinemaHall = this.editShowingForm.value.cinemaHall;
      editedCinemaHall['body'] =
        this.cinemaHalls[this.showing['cinemaHall'].hallId - 1].body;
      editedCinemaHall['numberOfSeatsSold'] =
        this.cinemaHalls[
          this.showing['cinemaHall'].hallId - 1
        ].numberOfSeatsSold;
      editedCinemaHall['numberOfAvaibleSeats'] =
        this.cinemaHalls[
          this.showing['cinemaHall'].hallId - 1
        ].numberOfAvaibleSeats;
    }

    //OBIEKT ZEDYTOWANEGO SEANSU

    const editedShowing = {
      showingId: parseInt(this.id),
      date: this.editShowingForm.value.timeGroup.date,
      hour: this.editShowingForm.value.timeGroup.hour,
      occupiedSeats: this.showing['occupiedSeats'],
      cinemaHall: editedCinemaHall,
    };

    //TYTUŁ FILMU - warunki

    //jeśli to ten sam film, ale zmieniła się sala/data/godzina
    if (this.editShowingForm.value.title['title'] === this.previousFilmTitle) {
      this.film['showings'].forEach(
        (showing: object, showId: number, showTab: Array<object>) => {
          if (parseInt(showing['showingId']) == parseInt(this.id)) {
            showTab[showId] = editedShowing;
          }
          return showing;
        }
      );

      //podmieniam stary film, filmem z zedytowanym seansem
      this.http
        .put(`http://localhost:4201/orders/${this.film['id']}`, this.film)
        .subscribe(() => {
          this.editShowingForm.reset();
          this.router.navigate(['/showings']);
        });
    }
    //jeśli to inny film
    else {
      console.log(this.film['showings']);
      //usuwam seans z poprzedniego filmu
      this.film['showings'] = this.film['showings'].filter(
        (showing: object) =>
          parseInt(showing['showingId']) !== parseInt(this.id)
      );
      console.log(this.film['showings']);
      //podmieniam stary film, filmem z usuniętym seansem
      this.http
        .put(`http://localhost:4201/orders/${this.film['id']}`, this.film)
        .subscribe(() => {});

      console.log(this.film);

      //dodaje do nowego, tak jak w add-showing
      const selectedFilm = this.editShowingForm.value.title;
      console.log(selectedFilm);
      const updatedFilmWitheditedShowing = {
        id: parseInt(selectedFilm.id),
        title: selectedFilm.title,
        duration: selectedFilm.duration,
        imageUrl: selectedFilm.imageUrl,
        showings: [...selectedFilm.showings, editedShowing],
      };
      console.log(updatedFilmWitheditedShowing);

      this.http
        .put(
          `http://localhost:4201/orders/${selectedFilm.id}`,
          updatedFilmWitheditedShowing
        )
        .subscribe(() => {
          this.editShowingForm.reset();
          this.router.navigate(['/showings']);
        });
    }
  }
}
