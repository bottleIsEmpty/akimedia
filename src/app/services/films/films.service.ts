import { FILMS } from './../../films/shared/mock-films';
import { Injectable } from '@angular/core';
import { COMMENTS } from './../../films/shared/mock-comments';

@Injectable()
export class FilmsService {

  getFilms() {
    return Promise.resolve(FILMS);
  }

  getFilm(id) {
    return Promise.resolve(FILMS[id]);
  }

  getComments() {
    return Promise.resolve(COMMENTS)
  }

}
