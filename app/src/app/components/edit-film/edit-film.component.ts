import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.css'],
})
export class EditFilmComponent implements OnInit {
  @ViewChild('f') editFilmForm: NgForm;
  faArrowLeft = faArrowLeft;
  film = {
    id: 0,
    title: '',
    duration: '',
    imageUrl: '',
    showings: [],
  };
  id = '0';

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.http
      .get(`http://localhost:4201/orders/${this.id}`)
      .pipe(
        map((responseData) => {
          return responseData;
        })
      )
      .subscribe((responseData) => {
        this.editFilmForm.form.setValue({
          title: responseData['title'],
          duration: responseData['duration'],
          url: responseData['imageUrl'],
        });

        this.film.id = responseData['id'];
        this.film.title = responseData['title'];
        this.film.duration = responseData['duration'];
        this.film.imageUrl = responseData['imageUrl'];
        this.film.showings = responseData['showings'];
      });
  }

  onSubmit() {
    this.http
      .put(`http://localhost:4201/orders/${this.id}`, {
        id: this.id,
        title: this.editFilmForm.value.title,
        duration: this.editFilmForm.value.duration,
        imageUrl: this.editFilmForm.value.url,
        showings: this.film.showings,
      })
      .subscribe(() => {
        this.editFilmForm.reset();
        this.router.navigate(['/films']);
      });
  }
}
