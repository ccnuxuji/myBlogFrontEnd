import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

import { environment } from '../../environments/environment';
import {User} from '../shared/user.model';
import {BehaviorSubject} from 'rxjs';
import {tap} from 'rxjs/operators';

export interface AuthResponseData {
  code: number;
  data: any;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient,
              private router: Router) {}

  signup(name: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        environment.API + '/signup',
        {
          name,
          password
        });
  }

  login(name: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        environment.API + '/login',
        {
          name,
          password,
        },
        {withCredentials: true}
      )
      .pipe(
        tap(res => {
          this.handleAuthentication(res.data);
        })
      );
  }

  checkLogin() {
    return this.http
      .get<AuthResponseData>(
        environment.API + '/checkLogin', {withCredentials: true}
      );
  }

  private handleAuthentication(name: string) {
    const user = new User(name);
    this.user.next(user);
    sessionStorage.setItem('userData', JSON.stringify(user));
  }

  autoLogin() {
    const userData: User = JSON.parse(sessionStorage.getItem('userData'));
    if (!userData) {
      return;
    }

    const loadedUser = new User(userData.name);
    this.user.next(loadedUser);
  }

  logout() {
    return this.http
      .get<AuthResponseData>(
        environment.API + '/logout', {withCredentials: true}
      ).pipe(
        tap(res => {
          this.user.next(null);
          sessionStorage.removeItem('userData');
        })
      );
  }

}
