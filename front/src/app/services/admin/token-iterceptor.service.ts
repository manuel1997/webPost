import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http'
import {LoginService} from './login.service'

@Injectable({
  providedIn: 'root'
})
export class TokenIterceptorService implements HttpInterceptor {

  constructor(
    private loginservice:LoginService
  ) { }

  intercept(req,next){
    const tokenizeReq =  req.clone({
      setHeaders:{
        Authorization: `Bearer ${this.loginservice.obtenerToken()}`
      }
    })
    return next.handle(tokenizeReq);
  }
}
