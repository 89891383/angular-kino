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
export class ShowingComponent implements OnInit, OnChanges {
  @Input() data: {
    id: number;
    title: string;
    duration: string;
    imageUrl: string;
    showings: any;
  };

  @Input() selectedDate: string;

  @Input() someInput: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getFilm();
    this.getHours();
  }

  film = {};
  showingsOfThisFilm = [];

  getFilm() {
    this.data.showings.map((showing: object) => {
      if (showing['id'] === this.data.id) {
        this.showingsOfThisFilm.push(showing);
      }
    });
    this.film = {
      id: this.data.id,
      title: this.data.title,
      duration: this.data.duration,
      imageUrl: this.data.imageUrl,
    };
  }

  getHours() {
    this.data.showings.map((showing: object) => {
      this.showingsOfThisFilm.push(showing);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getShowingsByDate(this.selectedDate);
  }

  getShowingsByDate(selectedDate: string) {
    const showingsBySelectedDate = this.showingsOfThisFilm.filter(
      (showing) => showing.date == selectedDate
    );

    if (showingsBySelectedDate.length !== 0) {
      this.showingsOfThisFilm = showingsBySelectedDate.map((data) => data);
      console.log(this.showingsOfThisFilm);
    }
  }
}
