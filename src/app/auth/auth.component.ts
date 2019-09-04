import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = false;
  isLoading = false;
  error = null;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    const name = form.value.email;
    const password = form.value.password;
    this.isLoading = true;

    this.authService.signUp(name, password).subscribe(response => {
      this.isLoading = false;
      this.error = response.message;
      console.log(response);
    },
      error1 => {
        this.isLoading = false;
        this.error = error1;
        console.log(error1);
      });
    form.reset();
  }
}
