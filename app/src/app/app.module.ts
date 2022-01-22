import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShowingsListComponent } from './components/showings-list/showings-list.component';
import { FilmsListComponent } from './components/films-list/films-list.component';
import { FilmComponent } from './components/film/film.component';
import { AddFilmComponent } from './components/add-film/add-film.component';
import { ErrorComponent } from './components/error/error.component';
import { FilmDurationValidatorDirective } from './directives/film-duration-validator.directive';
import { EditFilmComponent } from './components/edit-film/edit-film.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
  },
  {
    path: 'showings',
    component: ShowingsListComponent,
  },
  {
    path: 'films',
    component: FilmsListComponent,
  },
  {
    path: 'addFilm',
    component: AddFilmComponent,
  },
  {
    path: 'editFilm/:id',
    component: EditFilmComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CheckoutComponent,
    ShowingsListComponent,
    FilmsListComponent,
    FilmComponent,
    AddFilmComponent,
    ErrorComponent,
    FilmDurationValidatorDirective,
    EditFilmComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
