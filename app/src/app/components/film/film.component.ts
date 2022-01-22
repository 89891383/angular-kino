import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent implements OnInit {
  @Input() film: {
    id: number;
    title: string;
    duration: number;
    imageUrl: string;
  };
  @Output() onDeleteFilm: EventEmitter<number> = new EventEmitter();
  faEdit = faEdit;
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}

  deleteFilm(filmId: number): void {
    this.onDeleteFilm.emit(filmId);
  }
}
