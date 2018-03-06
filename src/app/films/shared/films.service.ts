import { FILMS } from './mock-films';
import { Injectable } from '@angular/core';
import { COMMENTS } from './mock-comments';

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
