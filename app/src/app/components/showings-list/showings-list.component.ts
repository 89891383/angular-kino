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
  dataArray = [];

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
      });
  }
}
