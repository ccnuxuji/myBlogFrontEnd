import {Component} from '@angular/core';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {

  isAuthenticated = true;


  constructor(private authService: AuthService) {
  }

  checkLogin() {
    this.authService.checkLogin()
      .subscribe(res => {
      console.log(res);
    });
  }

  onLogout() {
    this.authService.logout();
    console.log('done');
  }
}
