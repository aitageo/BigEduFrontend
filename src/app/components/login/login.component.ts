import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title:string
  public login : Login
  public token:string

  constructor(private _userService:UsersService,private router:Router) {
    this.title = "Usuario logueado";
    this.login = new Login('','',true);
    this.token = "";
   }

  ngOnInit(): void {
    
  }

  

  LoginUser(form:any){
    console.log(this.login);
    this._userService.Login(this.login)
    Swal.fire({
      // position: 'top-end',
      icon: 'success',
      title: 'Bienvenido a la web',
      showConfirmButton: false,
      timer: 1200
    })
  }


}

