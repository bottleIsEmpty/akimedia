import { environment } from './../../../environments/environment';
import { FilmsService } from './../../services/films/films.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  urlValue;

  constructor(private filmsService: FilmsService) {
   }

  topFilms = [];
  lastFilms;

  ngOnInit() {
    this.urlValue = environment.apiUrl;

    this.filmsService.getTopFilms()
      .subscribe(films => this.topFilms = films);

    this.filmsService.getLastFilms()
      .subscribe(films => {
        this.lastFilms = films;
        console.log(films);
      });
  }

}
