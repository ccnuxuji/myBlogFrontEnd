import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

import {AuthService} from '../auth/auth.service';
import {User} from '../shared/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  currUser: User;
  private userSub: Subscription;


  constructor(private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      this.currUser = user;
    });
  }

  checkLogin() {
    this.authService.checkLogin()
      .subscribe(res => {
      console.log(res);
    });
  }

  onLogout() {
    this.authService.logout().subscribe(res => {
      this.router.navigate(['/topic']);
    });
  }

  onSearch(form: NgForm) {
    const keyword = form.value.keyword;
    this.router.navigate(['/search'], {queryParams: {keyword, start: 0}});
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

}
