import { FILMS } from './mock-films';
import { Injectable } from '@angular/core';

@Injectable()
export class FilmsService {

  getFilms() {
    return Promise.resolve(FILMS);
  }

  getFilm(id) {
    return Promise.resolve(FILMS[id])
  }

}
