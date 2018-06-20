import { environment } from './../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt/';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  url = environment.apiUrl || '';

  login(credentials) {
    return this.http.post(
      `${this.url}/api/token`,
      credentials
      ).map(response => {
        const result = response.json();
        if (response.status !== 200) {
          return false;
        }
        if (result && result.account_token) {
          localStorage.setItem('token', result.account_token);
          return true;
        }
      return false;
    });
  }

  register(credentials) {
    return this.http.post(`${this.url}/api/register`, credentials);
  }

  getUser(id) {
    return this.http.get(`${this.url}/api/users/${id}`)
      .map(res => res.json());
  }

  getUsers() {
    return this.http.get(`${this.url}/api/users/`)
      .map(res => res.json());
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    const jwtHelper = new JwtHelperService();
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    const isExpired = jwtHelper.isTokenExpired(token);

    return !isExpired;
  }

  isAdmin() {
    if (this.isLoggedIn() && this.currentUser['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'admin') {
      return true;
    }

    return false;
  }

  get currentUser() {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }

    return new JwtHelperService().decodeToken(token);
  }

  get loginValue() {
    return this.currentUser['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
  }

  get token() {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }

    return token;
  }


}
