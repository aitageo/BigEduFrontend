import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/users';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public title:string
  public login : Login

  constructor(private _userService:UsersService,private auth:AuthService,private router:Router) {
    this.title = "Usuario logueado";
    this.login = new Login('','')
   }

  ngOnInit(): void {
    
  }

  goRegistro(){
   this.router.navigate(['registro'])
  }


  LoginUser(form:any){
    console.log(this.login);
    this._userService.Login(this.login).subscribe(
      response =>{
        console.log(response);
        console.log("Usuario Logueado"); 
        this.router.navigate(['lider'])
      },
      err =>{
        console.error(err);
        
      }
    )
  }

}

