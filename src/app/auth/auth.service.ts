import {Injectable, ViewChild} from '@angular/core';
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
  private API = '//localhost:8080/tmall_springboot';
  private signUpAPI = this.API + '/signup';

  constructor(private http: HttpClient) { }

  signUp(name: string, password: string) {
    return this.http.post<AuthResponseData>(this.signUpAPI, {
      name: name,
      password: password
    });
  }
}
