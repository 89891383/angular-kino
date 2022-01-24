import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { map } from 'rxjs/operators';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class BuyTicketComponent implements OnInit {
  faArrowLeft = faArrowLeft;
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  id = '';
  films = [];
  film = {};
  showing = {};
  cinemaHall = {};
  cinemaHallBody = [];
  buttonClass = '';
  error = false;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.searchThatShowing;
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
        this.searchThatShowing();
      });
  }

  searchThatShowing() {
    this.films.map((film) => {
      const tmp = film.showings.find(
        (showing: object) => parseInt(showing['showingId']) == parseInt(this.id)
      );
      if (tmp) {
        this.film = film;
        this.showing = tmp;
      }
    });
    this.cinemaHall = this.showing['cinemaHall'];
    this.cinemaHallBody = this.showing['cinemaHall'].body;
  }

  onClick(button: object) {
    button['isActive'] = !button['isActive'];
  }

  buyTicket(): void {
    let count = 0;

    this.cinemaHallBody.map((row) =>
      row.map((element: object) => {
        if (element['isActive']) {
          element['id'] = 'X';
          count++;
        }
        return element;
      })
    );

    if (this.cinemaHall['numberOfSeatsSold'] == count) {
      this.error = true;
      return;
    }

    const editedCinemaHall = {
      hallId: this.cinemaHall['hallId'],
      capacity: this.cinemaHall['capacity'],
      body: this.cinemaHallBody,
      numberOfSeatsSold: count,
      numberOfAvaibleSeats: this.cinemaHall['capacity'] - count,
    };

    const editedShowing = {
      showingId: this.showing['showingId'],
      date: this.showing['date'],
      hour: this.showing['hour'],
      occupiedSeats: this.showing['occupiedSeats'],
      cinemaHall: editedCinemaHall,
    };

    this.film['showings'].forEach(
      (showing: object, showId: number, showTab: Array<object>) => {
        if (
          parseInt(showing['showingId']) == parseInt(this.showing['showingId'])
        ) {
          showTab[showId] = editedShowing;
        }
        return showing;
      }
    );

    const actualizedFilm = {
      id: this.film['id'],
      title: this.film['title'],
      duration: this.film['duration'],
      imageUrl: this.film['imageUrl'],
      showings: this.film['showings'],
    };

    this.http
      .put(`http://localhost:4201/orders/${this.film['id']}`, actualizedFilm)
      .subscribe(() => {
        this.router.navigate(['/checkout']);
      });
  }
}
