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
    this.getData();
  }

  onDeleteFilm(filmId: number) {
    this.http
      .delete(`http://localhost:4201/orders/${filmId}`)
      .subscribe((response) => {
        this.getData();
      });
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
}
