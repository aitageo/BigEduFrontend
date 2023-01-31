import { Injectable } from '@angular/core';
import { Login, Users } from '../models/users';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { global } from './global';
import { application, response } from 'express';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public url: string;

  constructor(private _http:HttpClient) { 
    this.url = global.url;
  }


saveUser(user:Users):Observable<any>{
  let params = JSON.stringify(user);
  let headers = new HttpHeaders().set('Content-Type','application/json');


  return this._http.post(this.url+'/usuario/nuevo',params,{headers:headers})

}

Login(login:Login):Observable<any>{
  let params = JSON.stringify(login);
  let headers = new HttpHeaders().set('Content-Type','application/json');

  return this._http.post(this.url+'/usuario/login/',params,{headers:headers})
}

  
}
