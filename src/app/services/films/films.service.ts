import { Film } from './../../models/films/film.model';
import { environment } from './../../../environments/environment';
import { Http } from '@angular/http';
import { FILMS } from './../../components/films/shared/mock-films';
import { Injectable } from '@angular/core';
import { COMMENTS } from './../../components/films/shared/mock-comments';

@Injectable()
export class FilmsService {

  url = environment.apiUrl + '/api/films';

  constructor(private http: Http) {}

  getFilms() {
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getFilm(id) {
    return this.http.get(`${this.url}/${id}`)
      .map(res => res.json());
  }

  getComments() {
    return Promise.resolve(COMMENTS);
  }

  addFilm(film: Film) {
    return this.http.post(this.url, film)
      .map(res => res.json());
   }

  addPhoto(id, photo) {
    const formData = new FormData();
    formData.append('photo', photo);

    return this.http.post(`${this.url}/${id}/photo`, formData);
  }

}
