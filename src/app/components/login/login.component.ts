import { Component, OnInit } from '@angular/core';
import { Login, Users } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title:string
  public login : Login
  public token:string
  public message: boolean;

  constructor(private _userService:UsersService,private router:Router) {
    this.title = "Usuario logueado";
    this.login = new Login('','',true);
    this.token = "";
    this.message = false;
   }

  ngOnInit(): void {
    
  }

  

  LoginUser(form: any) {
    // console.log(this.login);
    this._userService.Login(this.login);
    if (this._userService.getErrorMessage()) {
      this.message = true;
      this.router.navigate(['login']);
  
    } else {
      this.message = false;
      this.router.navigate(['lider']);
      // form.reset()
    
    }
  }



}

