import { AdminAuthGuard } from './services/admin-auth-guard.service';
import { GenreService } from './services/genre.service';
import { FilmDirectorService } from './services/films/film-director.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, CanActivate } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NouisliderModule } from 'ng2-nouislider';
import { StarRatingModule } from 'angular-star-rating';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CarouselModule } from 'angular2-carousel';
import { JwtModule } from '@auth0/angular-jwt';

// Components
import { AppComponent } from './app.component';
import { FilmDirectorComponent } from './components/films/film-director/film-director.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AddFilmDirectorComponent } from './components/films/add-film-director/add-film-director.component';
import { AddFilmComponent } from './components/films/add-film/add-film.component';
import { FilmsListComponent } from './components/films/films-list/films-list.component';
import { FilmProfileComponent } from './components/films/film-profile/film-profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { FilmDirectorListComponent } from './components/films/film-director-list/film-director-list.component';
import { UserProfileComponent } from './components/users/user-profile/user-profile.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { PhotoComponent } from './components/shared/photo/photo.component';
import { AddBookAuthorComponent } from './components/books/add-book-author/add-book-author.component';
import { BooksListComponent } from './components/books/books-list/books-list.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { BookProfileComponent } from './components/books/book-profile/book-profile.component';
import { BookAuthorListComponent } from './components/books/book-author-list/book-author-list.component';
import { BookAuthorComponent } from './components/books/book-author/book-author.component';
import { GenreComponent } from './components/shared/genre/genre.component';
import { SearchComponent } from './components/shared/search/search.component';
import { AddMusicComponent } from './components/music/add-music/add-music.component';
import { AddMusicComposerComponent } from './components/music/add-music-composer/add-music-composer.component';
import { MusicComposerComponent } from './components/music/music-composer/music-composer.component';
import { MusicComposerListComponent } from './components/music/music-composer-list/music-composer-list.component';
import { MusicProfileComponent } from './components/music/music-profile/music-profile.component';
import { MusicListComponent } from './components/music/music-list/music-list.component';

// Pipes
import { ShortifyPipe } from './pipes/shortify.pipe';

// Services
import { AuthService } from './services/auth.service';
import { BooksService } from './services/books/books.service';
import { FilmsService } from './services/films/films.service';
import { HttpClientModule } from '@angular/common/http';

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
    GenreComponent,
    SearchComponent,
    AddMusicComponent,
    AddMusicComposerComponent,
    MusicComposerComponent,
    MusicComposerListComponent,
    MusicProfileComponent,
    MusicListComponent,
  ],
  imports: [
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        whitelistedDomains: ['localhost:5001', 'localhost:5000', 'akimedia.ru']
      }
    }),
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
            component: AddFilmComponent,
            canActivate: [AdminAuthGuard]
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
                component: AddFilmDirectorComponent,
                canActivate: [AdminAuthGuard]
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
            component: AddBookComponent,
            canActivate: [AdminAuthGuard]
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
                component: AddBookAuthorComponent,
                canActivate: [AdminAuthGuard]
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
      },
      {
        path: 'music',
        children: [
          {
            path: '',
            component: MusicListComponent
          },
          {
            path: 'add',
            component: AddMusicComponent
          },
          {
            path: 'composers',
            children: [
              {
                path: '',
                component: MusicComposerListComponent
              },
              {
                path: 'add',
                component: AddMusicComposerComponent,
                canActivate: [AdminAuthGuard]
              },
              {
                path: ':id',
                component: MusicComposerComponent
              }
            ]
          },
          {
            path: ':id',
            component: MusicProfileComponent
          }
        ]
      }
    ])
  ],
  providers: [
    FilmsService,
    FilmDirectorService,
    BooksService,
    AuthService,
    GenreService,

    AdminAuthGuard

    // Mock backend
    // fakeBackendProvider,
    // MockBackend,
    // BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
