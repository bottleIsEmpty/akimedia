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
import { CarouselModule } from "angular2-carousel";

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
import { AddBookAuthorComponent } from './books/add-book-author/add-book-author.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { AddBookComponent } from './books/add-book/add-book.component';
import { BookProfileComponent } from './books/book-profile/book-profile.component';
import { BookAuthorListComponent } from './books/book-author-list/book-author-list.component';
import { BookAuthorComponent } from './books/book-author/book-author.component';

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
    BookAuthorComponent,
    AddBookAuthorComponent,
    BookAuthorListComponent,
    BooksListComponent,
    AddBookComponent,
    BookProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NouisliderModule,
    Ng2SmartTableModule,
    CarouselModule,
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
      },
      {
        path: 'books',
        children: [
          {
            path: '',
            component: BooksListComponent
          },
          {
            path: 'add',
            component: AddBookComponent
          },
          {
            path: 'authors',
            children: [
              {
                path: '',
                component: BookAuthorListComponent
              },
              {
                path: 'add',
                component: AddBookAuthorComponent
              },
              {
                path: ':id',
                component: BookAuthorComponent
              }
            ]
          },
          {
            path: ':id',
            component: BookProfileComponent
          }
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
