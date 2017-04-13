import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { API_BASE_URL } from './constants';
import { RequestBase } from './request-base';
import { environment } from '../../environments/environment';

@Injectable()
export class UserService extends RequestBase {
  constructor(public http: Http) {
    super(http);
  }

  logout(): Observable<string> {
    return this.http.get(`${API_BASE_URL}/logout`, this.optionsNoPre)
      .map(res => res.text());
  }
  login(credentials): Observable<string> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    var options = new RequestOptions({ headers: headers });
    var login: string = 'email=' + credentials.email + '&password=' + credentials.password;

    return this.http.post(`${environment.API_BASE_URL}/login`, login, options)
      .map(res => res.json());
  }
}
