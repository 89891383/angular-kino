import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-showings-list',
  templateUrl: './showings-list.component.html',
  styleUrls: ['./showings-list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ShowingsListComponent implements OnInit {
  faPlusSquare = faPlusSquare;
  showings = [];
  showings2 = [
    {
      filmId: '',
      hours: [],
    },
  ];
  loaded = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getShowings();
  }

  getShowings() {
    this.http
      .get('http://localhost:4201/showings')
      .pipe(
        map((responseData) => {
          const showingsArray = [];

          for (let key in responseData) {
            showingsArray.push({ ...responseData[key] });
          }

          return showingsArray;
        })
      )
      .subscribe((showingsArray) => {
        this.showings = showingsArray.map((showing) => showing);
        console.log(showingsArray);
        //   this.showings2 = this.showings.reduce(
        //     (previousValue, showing, curr, array) => {
        //       console.log(showing.filmId);
        //       console.log(array);
        //       if (!array.includes(showing.filmId)) {
        //         console.log(showing);
        //         //array.push({ filmId: showing.filmId, hours: [] });
        //         return { filmId: showing.filmId, hours: [] };
        //       }
        //     }
        //   );
      });
  }
}
