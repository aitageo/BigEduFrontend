import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url:string
  
  constructor(private _http: HttpClient) { 
    this.url = global.url
  }

  signUp(user: any){
    let headers = new HttpHeaders().set('Content-Type','application/json');
    console.log(user);
    
    return this._http.post<any>(this.url+'/usuario/login',user)

  }
}
