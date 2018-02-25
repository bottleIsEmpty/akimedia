import { FilmsService } from './films/shared/films.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NouisliderModule } from 'ng2-nouislider';

import { AppComponent } from './app.component';
import { FilmDirectorComponent } from './films/film-director/film-director.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddFilmDirectorComponent } from './films/add-film-director/add-film-director.component';
import { AddFilmComponent } from './films/add-film/add-film.component';
import { FilmsListComponent } from './films/films-list/films-list.component';
import { FilmProfileComponent } from './films/film-profile/film-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmDirectorComponent,
    NavbarComponent,
    HomeComponent,
    AddFilmDirectorComponent,
    AddFilmComponent,
    FilmsListComponent,
    FilmProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NouisliderModule,
    [MatSnackBarModule],
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { 
        path: '', 
        component: HomeComponent 
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
    FilmsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
