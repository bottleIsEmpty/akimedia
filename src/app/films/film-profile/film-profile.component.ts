import { MatSnackBar } from '@angular/material';
import { Film } from '../../models/films/film.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../../services/films/films.service';


@Component({
  selector: 'film-profile',
  templateUrl: './film-profile.component.html',
  styleUrls: ['./film-profile.component.scss']
})
export class FilmProfileComponent implements OnInit {

  film: Film;
  comments = [];

  constructor(
    private filmsService: FilmsService,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        const id = +params.get('id');
        this.filmsService.getFilm(id)
          .then(film => this.film = film );
      });

    this.filmsService.getComments()
      .then(comments => this.comments = comments);
  }

  addComment(comment, filmRating) {
    const commentValue = {
      id: 1,
      film: 1,
      date: new Date(),
      commentedBy: {
          id: 1,
          login: 'Михаил',
          email: 'mikhail@gmail.com'
      },
      commentType: filmRating,
      comment: comment
    };

    this.comments.push(commentValue);
    this.snackBar.open('Комментарий успешно добавлен', null, {
      duration: 2000
    });
  }

}
