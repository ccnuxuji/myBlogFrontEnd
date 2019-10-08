import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface AuthResponseData {
  code: number;
  data: {};
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

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
        }
      );
  }

}
