import { UserService } from 'src/app/services/user/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService implements CanActivate{

  constructor(private userService : UserService, private router : Router) { }
  canActivate(route: ActivatedRouteSnapshot,
     state: RouterStateSnapshot){
       return this.userService.isAdmin().pipe(
         map(result=>{
           if(!result)
           {
             this.router.navigate([''], {
              queryParams : {
                returnUrl : state.url
              }
            })
            }
           return result;
         })
       )
    }
}
