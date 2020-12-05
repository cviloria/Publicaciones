import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('AuthGuard#canActivate called');
      console.log(this.auth.isAuthenticated());
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  
}
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('AuthGuard#canActivate called');
      console.log(this.auth.isAuthenticated());
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['/publicaciones']);
      return false;
    }
    return true;
  }
  
}