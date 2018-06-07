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

  constructor(private filmDirectorService: FilmDirectorService) { }

  ngOnInit() {
    this.filmDirectorService.getDirectors().subscribe(directors => {
      // console.log(directors);
      this.directors = directors as FilmDirector[];
    });
  }

}
