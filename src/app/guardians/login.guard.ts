import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../services/users.service';

@Injectable()
export class LoginGuard implements CanActivate {
  
  constructor(private user:UsersService,private router:Router){}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {
      if (this.user.logged()) {
        return true;
      }
      else {
        this.router.navigate(['login'])
        return false;
      }
  }
  
}
