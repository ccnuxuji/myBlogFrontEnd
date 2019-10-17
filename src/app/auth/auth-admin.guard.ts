import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {AuthService} from './auth.service';
import {map, take} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthAdminGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Promise<boolean | UrlTree>
    | Observable<boolean | UrlTree> {
    return false;
    // return this.authService.user.pipe(
    // take(1),
    // map(user => {
    //   const isAuth = !!user;
    //   if (isAuth) {
    //     return true;
    //   }
    // return this.router.createUrlTree(['/auth']);
    // })
    // tap(isAuth => {
    //   if (!isAuth) {
    //     this.router.navigate(['/auth']);
    //   }
    // })
    // );
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean | UrlTree {
    return true;
    // return this.authService.user.pipe(
    //   map(user => {
    //     const isAuth = !!user;
    //     if (isAuth && user.name === 'ccnuxuji') {
    //       return true;
    //     }
    //     return this.router.createUrlTree(['/auth']);
    //   })
    // );
  }
}
