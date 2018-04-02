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
import { Ng2SmartTableModule } from 'ng2-smart-table';

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
import { SignUpComponent } from './sign-up/sign-up.component';
import { FilmDirectorListComponent } from './films/film-director-list/film-director-list.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { ShortifyPipe } from './pipes/shortify.pipe';
import { PhotoComponent } from './shared/photo/photo.component';
import { PhotoInputComponent } from './photo-input/photo-input.component';

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
    LoginComponent,
    SignUpComponent,
    FilmDirectorListComponent,
    UserProfileComponent,
    UserListComponent,
    ShortifyPipe,
    PhotoComponent,
    PhotoInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NouisliderModule,
    Ng2SmartTableModule,
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
        path: 'signup',
        component: SignUpComponent
      },
      {
        path: 'users',
        children: [
          {
            path: '',
            component: UserListComponent
          },
          {
            path: ':id',
            component: UserProfileComponent
          }
        ]
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
                component: FilmDirectorListComponent
              },
              {
                path: 'add',
                component: AddFilmDirectorComponent
              },
              {
                path: ':id',
                component: FilmDirectorComponent
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
