import { environment } from './../../../../environments/environment';
import { FilmDirector } from './../../../models/films/film-director.model';
import { FilmDirectorService } from './../../../services/films/film-director.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-film-director-list',
  templateUrl: './film-director-list.component.html',
  styleUrls: ['./film-director-list.component.scss']
})
export class FilmDirectorListComponent implements OnInit {

  directors: FilmDirector[];
  apiUrl;

  constructor(private filmDirectorService: FilmDirectorService) { }

  ngOnInit() {
    this.apiUrl = environment.apiUrl;
    this.filmDirectorService.getDirectors().subscribe(directors => {
      this.directors = directors as FilmDirector[];
    });
  }

}
