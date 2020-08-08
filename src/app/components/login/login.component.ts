import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form : HTMLFormElement
  error : string;
  success : string;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(): void {
  }

  login(event : Event){
    event.preventDefault();
    this.form = <HTMLFormElement>event.target
    this.readFormValues();
  }

  navigateToHomePage(){
    this.router.navigate(['home'])
  }

  readFormValues(){
    let email = (<HTMLInputElement>this.form.elements.namedItem('email')).value
    let password = (<HTMLInputElement>this.form.elements.namedItem('password')).value
    let credentials = {
      email, password
    }
    console.log(credentials);
    this.userService.login(credentials).subscribe({
      next : (result)=>{
        console.log(result);
        this.success = result.message
        this.error = undefined
        this.navigateToHomePage()
      },
      error : (response : HttpErrorResponse)=>{
        console.log(response.error);
        this.success = undefined 
        this.error = response.error.error.message
      }
    }
    )
  }

}
