import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css'],
})
export class AddFilmComponent implements OnInit {
  @ViewChild('f') addFilmForm: NgForm;

  faArrowLeft = faArrowLeft;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.http
      .post('http://localhost:4201/films', {
        id: Math.floor(Math.random() * (100000000 - 10)) + 10,
        title: this.addFilmForm.value.title,
        duration: this.addFilmForm.value.duration,
        imageUrl: this.addFilmForm.value.url,
      })
      .subscribe(() => {
        this.addFilmForm.reset();
        this.router.navigate(['/films']);
      });
  }
}
