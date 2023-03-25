import { Injectable } from '@angular/core';
import { Login, Users } from '../models/users';
import { Institucion } from '../models/institucion';
import { HttpClient, HttpHeaders, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { global } from './global';
import { application, response } from 'express';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from './token.service';
import { AuthInterceptorServiceService } from './auth-interceptor-service.service';
import { AuthResponse } from '../interfaces/auth-response';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class UsersService implements AuthResponse {
  public url: string;
  public token: any 
  public myToken :any
  public access_token: string;
  public errorMessage :string
  public institutionsList:any[]=[];
  public InstitutionFound:any[]=[]

  constructor(private _http: HttpClient,
              private router: Router,
              private cookieService: CookieService,
              private auth:  AuthInterceptorServiceService
              ){
    this.url = global.url;
    this.token = ""
    this.access_token = "";
    this.errorMessage = "";
    
  }

  saveUser(user: Users): Observable<any> {
    let params = JSON.stringify(user);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + '/usuario/nuevo', params, { headers: headers });
  }

       Login(login: Login) {
    let params = JSON.stringify(login);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    this._http.post<any>(this.url + '/usuario/login/', params, { headers: headers }).subscribe(
      response => {
        console.log(response)
        console.log("Usuario Logueado"); 
        this.router.navigate(['lider']);
        // this.token = (JSON.stringify(response));
        this.token = response.token
        console.log(`Èste es el token? ${this.token}`);
        this.GetToken() 
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido a Big Edu',
          showConfirmButton: false,
          timer: 800
        });
      },
      err => {
      console.error(err);
      this.errorMessage = err
      this.getErrorMessage();
      Swal.fire({
        title: 'Error!',
        text: 'Usuario o Contraseña Invalidos',
        icon: 'error',
        confirmButtonText: 'Aceptar',
        timer: 9500,
      });
      });
  }


  saveInstitution(institucion: Institucion) {
    const token = this.auth.getToken()
    console.log(token);
    this.GetIntitutions()
    let params = JSON.stringify(institucion);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    console.log(headers);
    

    this._http.post(this.url + '/institucion/nuevo', params, { headers: headers }).subscribe(
      response => {
        this.GetIntitutions();
        console.log(response);
        console.log("Institucion Guardada"); 
        this.router.navigate(['lider']);
      },
      (err)=> {
        console.log(err)
  });
  } 


  GetIntitutions(){
    const token = this.auth.getToken()
    console.log(token);
    
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });

    this._http.get(`${this.url}/institucion/todos`,{headers:headers}).subscribe(
      (response:any) => {
         this.institutionsList = response.TodasInstituciones;
         console.log(this.institutionsList[0]);
      

     }
      
  )}


  GetInstitution(id:number){
    const token = this.auth.getToken()
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });

     return this._http.get<any>(this.url + '/institucion/buscar/' + id,{headers:headers})
  } 

  logged() {
    return this.token
  }

  public getErrorMessage(): string {
    return this.errorMessage;
  }


  GetToken(){
   this.myToken = this.token
   this.cookieService.set("token",this.myToken)
   return this.cookieService.get("token")
  }

  destroyToken() {
    this.token = "";
    this.cookieService.delete('token');
    this.router.navigate(['login']);
    console.log("token eliminado");
  }
}


