import { FilmDirector } from './../../models/films/film-director.model';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { of } from 'rxjs/observable/of';
import { map } from 'rxjs/operators';

@Injectable()
export class FilmDirectorService {

  url = environment.apiUrl + '/api/films/directors';

  constructor(private http: Http) { }

  getDirectors(query?: string) {
    let queryUrl = this.url;
    if (query && query !== '') {
      queryUrl = `${this.url}?query=${query}`;
    }

    return this.http.get(this.url)
      .map(res => res.json());
  }

  search(query: string) {
    if (query === '') {
      return of([]);
    }

    return this.http.get(`${this.url}?query=${query}`)
      .pipe(
        map(response => response[1])
      );
  }

  getDirector(id: number) {
    return this.http.get(`${this.url}/${id}`)
      .map(res => res.json());
  }

  addDirector(director: FilmDirector) {
    return this.http.post(this.url, director)
      .map(res => res.json());
  }

  addPhoto(id: number, file) {
    const formData: FormData = new FormData();
    formData.append('photo', file);

    return this.http.post(`${this.url}/${id}/photo`, formData);
      // .map(res => res.json());
  }
}
