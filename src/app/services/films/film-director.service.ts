import { FilmDirector } from './../../models/films/film-director.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class FilmDirectorService {

  url = environment.apiUrl + '/api/films/directors';

  constructor(private http: Http) { }

  getDirectors() {
    return this.http.get(this.url)
      .map(res => res.json());
  }

  getDirector(id: number) {
    return this.http.get(`${this.url}/${id}`)
      .map(res => res.json());
  }

  addDirector(director: FilmDirector) {
    // const directorData = JSON.stringify(director);
    return this.http.post(this.url, director)
      .map(res => res.json());
  }

  addPhoto(id: number, photo: File) {
    const formData = new FormData();
    formData.append('photo', photo);

    return this.http.post(`${this.url}/${id}/photo`, formData);
  }
}
