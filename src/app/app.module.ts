import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { FilmDirectorComponent } from './film-director/film-director.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddFilmDirectorComponent } from './add-film-director/add-film-director.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmDirectorComponent,
    NavbarComponent,
    HomeComponent,
    AddFilmDirectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    [MatSnackBarModule],
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'directors', component: FilmDirectorComponent },
      { path: 'add-film-director', component: AddFilmDirectorComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
