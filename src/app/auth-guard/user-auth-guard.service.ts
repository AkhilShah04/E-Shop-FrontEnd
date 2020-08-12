import { UserService } from 'src/app/services/user/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardService implements CanActivate{

  constructor(private userService : UserService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot) { 
    let flag = false

    if(this.userService.isLogggedIn()){
      flag = true
    }else{
      let currenturl = state.url
      this.router.navigate(['login'],{
        queryParams : {
          returnUrl : currenturl
        }
      })
    }


    return flag;
  }
}
