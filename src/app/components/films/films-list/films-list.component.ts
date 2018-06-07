import { FilmsService } from '../../../services/films/films.service';
import { NouisliderModule } from 'ng2-nouislider';
import { Component, OnInit } from '@angular/core';
import { Film } from '../../../models/films/film.model';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {

  slider = [1930, 1990];

  films: Film[];

  constructor(private filmsService: FilmsService) { }

  ngOnInit() {
    this.filmsService.getFilms()
      .then(films => this.films = films);
  }

}
