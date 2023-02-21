import { Injectable } from '@angular/core';
import { Login, Users } from '../models/users';
import { Institucion } from '../models/institucion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { application, response } from 'express';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public url: string;
  public token:any;

  constructor(private _http:HttpClient,private router:Router,) { 
    this.url = global.url;
    this.token = "";
  }


saveUser(user:Users):Observable<any>{
  let params = JSON.stringify(user);
  let headers = new HttpHeaders().set('Content-Type','application/json');


  return this._http.post(this.url+'/usuario/nuevo',params,{headers:headers})

}


saveInstitution(institucion:Institucion){
  let params = JSON.stringify(institucion);
  let headers = new HttpHeaders().set('Content-Type','application/json');
   this._http.post(this.url+'/institucion/nuevo',params,{headers:headers}).subscribe(
    response =>{
      console.log(response);
      console.log("Institucion Guardada"); 
      this.router.navigate(['lider']);
    },
    err=>console.error(err)
   )
}


Login(login:Login){
  let params = JSON.stringify(login);
  let headers = new HttpHeaders().set('Content-Type','application/json');

   this._http.post(this.url+'/usuario/login/',params,{headers:headers}).subscribe(
    response =>{
      console.log(response);
      console.log("Usuario Logueado"); 
      this.router.navigate(['lider']);
      this.token = response
      // this.cookie.set("token",this.token)
      this.getToken()
    },
    err=>console.error(err)
   )
}

getToken(){

  return this.token;
}

logged(){
  return this.token;

}

destroyToken(){
  this.token = ""
  // this.cookie.set("token",this.token)
  this.router.navigate(['login'])
  console.log("token eliminado");
  
  return this.token

}


}
