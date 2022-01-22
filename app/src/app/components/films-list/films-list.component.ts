import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FilmsListComponent implements OnInit {
  faPlusSquare = faPlusSquare;
  films = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getFilms();
  }

  onDeleteFilm(filmId: number) {
    this.http
      .delete(`http://localhost:4201/films/${filmId}`)
      .subscribe((response) => {
        this.getFilms();
      });
  }

  getFilms() {
    this.http
      .get('http://localhost:4201/films')
      .pipe(
        map((responseData) => {
          const filmsArray = [];

          for (let key in responseData) {
            filmsArray.push({ ...responseData[key] });
          }

          return filmsArray;
        })
      )
      .subscribe((filmsArray) => {
        this.films = filmsArray.map((film) => film);
      });
  }
}
