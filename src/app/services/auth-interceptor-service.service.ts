import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { UsersService } from './users.service';
import { CookieService } from 'ngx-cookie-service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorServiceService implements HttpInterceptor {

  constructor(private cookieservice:CookieService,private tokenService: TokenService ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Obtener el token de autenticación del servicio UsersService
    const token = this.tokenService.getToken();
    console.log(token);
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(req);
  }


  getToken():string{
   return this.cookieservice.get('token');
  }

}
