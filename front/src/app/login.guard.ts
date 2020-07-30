import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import {Router} from "@angular/router";
import {LoginService} from './services/admin/login.service'

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private loginservice:LoginService,
    private router:Router
    ) {}

  canActivate(): boolean{
    if (this.loginservice.logeado()){
      return true;
    }
    this.router.navigate(['login']);
    return false
  }
  
  
}
