import { AuthService } from './services/auth.service';
import { MockBackend } from '@angular/http/testing';
import { fakeBackendProvider } from './helpers/mock-backend';
import { FilmsService } from './films/shared/films.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NouisliderModule } from 'ng2-nouislider';
import { StarRatingModule } from 'angular-star-rating';

import { AppComponent } from './app.component';
import { FilmDirectorComponent } from './films/film-director/film-director.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddFilmDirectorComponent } from './films/add-film-director/add-film-director.component';
import { AddFilmComponent } from './films/add-film/add-film.component';
import { FilmsListComponent } from './films/films-list/films-list.component';
import { FilmProfileComponent } from './films/film-profile/film-profile.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { BaseRequestOptions } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    FilmDirectorComponent,
    NavbarComponent,
    HomeComponent,
    AddFilmDirectorComponent,
    AddFilmComponent,
    FilmsListComponent,
    FilmProfileComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NouisliderModule,
    [MatSnackBarModule],
    StarRatingModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'films',
        children: [
          {
            path: '',
            component: FilmsListComponent
          },
          {
            path: 'add',
            component: AddFilmComponent
          },
          {
            path: 'directors',
            children: [
              {
                path: '',
                component: FilmDirectorComponent
              },
              {
                path: 'add',
                component: AddFilmDirectorComponent
              }
            ]
          },
          {
            path: ':id',
            component: FilmProfileComponent
          },
        ]
      }
    ])
  ],
  providers: [
    FilmsService,
    AuthService,

    // Mock backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
