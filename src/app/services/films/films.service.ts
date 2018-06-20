import { AuthService } from './../auth.service';
import { Film } from './../../models/films/film.model';
import { environment } from './../../../environments/environment';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { COMMENTS } from './../../components/films/shared/mock-comments';

@Injectable()
export class FilmsService {

  url = environment.apiUrl + '/api/films';

  constructor(private http: Http, private authService: AuthService, private requestOptions: RequestOptions) {
    this.requestOptions = new RequestOptions({
      headers: new Headers({
        'Authorization': `Bearer ${authService.token}`
      })
    });
  }

  getFilms() {
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getLastFilms() {
    return this.http.get(this.url + '/last')
      .map(res => res.json());
  }

  getTopFilms() {
    return this.http.get(this.url + '/top')
      .map(res => res.json());
  }

  getFilm(id) {
    return this.http.get(`${this.url}/${id}`)
      .map(res => res.json());
  }

  getComments(filmId) {
    return this.http.get(`${this.url}/comments/${filmId}`)
      .map(res => res.json());
  }

  addComment(filmId, comment, type) {
    const commentData = {
      userId: this.authService.currentUser.id,
      filmId: filmId,
      comment: comment,
      type: type
    };

    return this.http.post(`${this.url}/comments/`, commentData)
      .map(res => res.json());
  }

  addFilm(film: Film) {
    return this.http.post(this.url, film, this.requestOptions)
      .map(res => res.json());
   }

  addPhoto(id, photo) {
    const formData = new FormData();
    formData.append('photo', photo);

    return this.http.post(`${this.url}/${id}/photo`, formData, this.requestOptions);
  }

}
