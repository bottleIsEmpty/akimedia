import { Http } from '@angular/http';
import { FILMS } from './../../components/films/shared/mock-films';
import { Injectable } from '@angular/core';
import { COMMENTS } from './../../components/films/shared/mock-comments';

@Injectable()
export class FilmsService {

  constructor() {}

  getFilms() {
    return Promise.resolve(FILMS);
  }

  getFilm(id) {
    return Promise.resolve(FILMS[id]);
  }

  getComments() {
    return Promise.resolve(COMMENTS);
  }

}
