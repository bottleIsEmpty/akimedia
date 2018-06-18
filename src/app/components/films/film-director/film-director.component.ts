import { environment } from './../../../../environments/environment';
import { FilmDirector } from './../../../models/films/film-director.model';
import { FilmDirectorService } from './../../../services/films/film-director.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-director',
  templateUrl: './film-director.component.html',
  styleUrls: ['./film-director.component.scss']
})
export class FilmDirectorComponent implements OnInit {

  director: FilmDirector;

  constructor(
    private route: ActivatedRoute,
    private filmDirectorService: FilmDirectorService,
  ) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        const id = +params.get('id');
        this.filmDirectorService.getDirector(id).subscribe(director => {
          if (director.photo) {
            director.photo = environment.apiUrl + '/photos/films/directors/' + director.photo;
          }

          this.director = director;
        });
      });
  }

}
