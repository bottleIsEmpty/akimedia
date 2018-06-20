import { environment } from './../../../../environments/environment.prod';
import { AuthService } from './../../../services/auth.service';
import { COMMENTS } from './../shared/mock-comments';
import { MatSnackBar } from '@angular/material';
import { Film } from '../../../models/films/film.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../../../services/films/films.service';


@Component({
  selector: 'film-profile',
  templateUrl: './film-profile.component.html',
  styleUrls: ['./film-profile.component.scss']
})
export class FilmProfileComponent implements OnInit {

  film: Film;
  comments = [];
  apiUrl: string;

  constructor(
    private filmsService: FilmsService,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.apiUrl = environment.apiUrl;
    this.route.paramMap
      .subscribe(params => {
        const id = +params.get('id');

        this.filmsService.getFilm(id)
          .subscribe(film => this.film = film );

        this.filmsService.getComments(id)
          .subscribe(comments => this.comments = comments);
      });

  }

  addComment(comment, type) {
    type = +type;

    this.filmsService.addComment(this.film.id, comment, type)
      .subscribe(result => {
        this.filmsService.getComments(this.film.id)
          .subscribe(comments => this.comments = comments);
      });

  }

  updateRating($event) {
    console.log($event);
  }

}
