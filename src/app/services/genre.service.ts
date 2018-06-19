import { Http } from '@angular/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class GenreService {

  url = environment.apiUrl + '/api/genres';

  constructor(private http: Http) {
  }

  getGenres(type: string) {
    return this.http.get(`${this.url}?type=${type}`)
      .map(result => result.json());
  }

}
