import { Film } from './../shared/film.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../shared/films.service';

@Component({
  selector: 'film-profile',
  templateUrl: './film-profile.component.html',
  styleUrls: ['./film-profile.component.scss']
})
export class FilmProfileComponent implements OnInit {

  film: Film;

  constructor(
    private filmsService: FilmsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        const id = +params.get('id');
        this.filmsService.getFilm(id)
          .then(film => this.film = film );
      });
  }

}
