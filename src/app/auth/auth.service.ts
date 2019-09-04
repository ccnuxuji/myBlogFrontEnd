import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

interface AuthResponseData {
  code: number;
  data: {};
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API = '//39.108.89.204:8080/techroad';
  private signUpAPI = this.API + '/signup';

  constructor(private http: HttpClient) { }

  signUp(name: string, password: string) {
    return this.http.post<AuthResponseData>(this.signUpAPI, {
      name: name,
      password: password
    });
  }
}
