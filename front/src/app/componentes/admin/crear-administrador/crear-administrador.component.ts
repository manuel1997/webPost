import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin/admin.service'

@Component({
  selector: 'app-crear-administrador',
  templateUrl: './crear-administrador.component.html',
  styleUrls: ['./crear-administrador.component.css']
})
export class CrearAdministradorComponent implements OnInit {

  admin = {};
  adminlist = [];
  
  constructor(private adminservice:AdminService) { }

  ngOnInit() {
    this.listarAdmin();
  }

  crearAdmin(){
    this.adminservice.crearAdministrador(this.admin)
    .subscribe(
      res => {
        console.log(res);
        this.admin = res;
      },
      err => console.log(err)
    )
  }

  listarAdmin(){
    this.adminservice.listarAdmin(this.adminlist)
    .subscribe(
      res => {
        this.adminlist = res;
      },
      err => console.log(err)
    )
  }

  eliminarAdmin(id:string){
    this.adminservice.eliminarAdmin(id)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )
  }

}
