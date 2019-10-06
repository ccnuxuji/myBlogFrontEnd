import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface AuthResponseData {
  code: number;
  data: {};
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API = '//localhost:8080/techroad';

  constructor(private http: HttpClient) {
  }

  signup(name: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        this.API + '/signup',
        {
          name,
          password
        });
  }

  login(name: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        this.API + '/login',
        {
          name,
          password,
        }
      );
  }

}
