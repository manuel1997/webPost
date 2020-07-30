import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL = 'http://localhost:3000/';

  constructor(private http:HttpClient,private router:Router) { }

  login(admin){
    return this.http.post<any>(this.URL+'login',admin);
  }
  
  logeado(){
    return !!localStorage.getItem('token');
  }

  obtenerAdmin(){
    let admin_string = localStorage.getItem('admin');
    let admin = JSON.parse(admin_string)
    return admin;
  }

  obtenerToken(){
    return localStorage.getItem('token');
  }


  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
    }

}
