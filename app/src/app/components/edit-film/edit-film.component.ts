import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.css'],
})
export class EditFilmComponent implements OnInit {
  @ViewChild('f') editFilmForm: NgForm;
  faArrowLeft = faArrowLeft;
  film = {};

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // this.http
    //   .get(`http://localhost:4201/films/2`)
    //   .pipe(
    //     map((responseData) => {
    //       const film = { ...responseData };
    //       return film;
    //     })
    //   )
    //   .subscribe((film) => {
    //     this.film = { ...film };
    //     console.log(this.film);
    //   });
  }

  onSubmit() {
    this.http
      .put('http://localhost:4201/films/2', {
        id: 2,
        title: this.editFilmForm.value.title,
        duration: this.editFilmForm.value.duration,
        imageUrl: this.editFilmForm.value.url,
      })
      .subscribe(() => {
        this.editFilmForm.reset();
        this.router.navigate(['/films']);
      });
  }
}
