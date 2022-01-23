import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-showing',
  templateUrl: './showing.component.html',
  styleUrls: ['./showing.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ShowingComponent implements OnInit {
  @Input() showing: {
    filmId: number;
    date: string;
    hour: string;
    occupiedSeats: string;
    cinemaHallId: number;
  };
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getFilm(this.showing.filmId);
  }

  film = {};
  hours = {};

  getFilm(id: number) {
    this.http
      .get(`http://localhost:4201/films/${id}`)
      .pipe(
        map((responseData) => {
          const film = { ...responseData };
          return film;
        })
      )
      .subscribe((film) => {
        this.film = { ...film };
        console.log(this.film);
      });
  }
}
