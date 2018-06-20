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
  apiUrl: string;

  constructor(
    private route: ActivatedRoute,
    private filmDirectorService: FilmDirectorService,
  ) { }

  ngOnInit() {
    this.apiUrl = environment.apiUrl;
    this.route.paramMap
      .subscribe(params => {
        const id = +params.get('id');
        this.filmDirectorService.getDirector(id).subscribe(director => {
          this.director = director;
        });
      });
  }

}
