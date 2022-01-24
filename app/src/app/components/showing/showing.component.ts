import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-showing',
  templateUrl: './showing.component.html',
  styleUrls: ['./showing.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ShowingComponent implements OnInit {
  @Input() data: {
    id: number;
    title: string;
    duration: string;
    imageUrl: string;
    showings: Array<object>;
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getFilm();
    this.getHours();
  }

  film = {};
  showingsOfThisFilm = [];

  getFilm() {
    this.data.showings.map((showing: object) => {
      if (parseInt(showing['id']) === this.data.id) {
        this.showingsOfThisFilm.push(showing);
      }
    });
    this.film = {
      id: this.data.id,
      title: this.data.title,
      duration: this.data.duration,
      imageUrl: this.data.imageUrl,
      showings: this.data.showings,
    };
  }

  getHours() {
    this.data.showings.map((showing: object) => {
      this.showingsOfThisFilm.push(showing);
    });
  }
}
