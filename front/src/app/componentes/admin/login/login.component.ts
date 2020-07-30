import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from '../../../services/admin/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin = {}; 

  constructor(
    private loginservice:LoginService,
    private router:Router
    ) { }

  ngOnInit() {
  }

  login(){
    this.loginservice.login(this.admin)
    .subscribe(
      res => {
        delete res.admin.control;
        delete res.admin.contrasena;
        delete res.admin.createdAt;
        delete res.admin.updatedAt;
        localStorage.setItem('admin',JSON.stringify(res.admin))
        localStorage.setItem('token',res.token);
        this.router.navigate(['/adminpost']);
      },
      err => console.log(err)
    )
  }

}
