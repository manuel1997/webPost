import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin/admin.service'

declare var $: any;

@Component({
  selector: 'app-crear-administrador',
  templateUrl: './crear-administrador.component.html',
  styleUrls: ['./crear-administrador.component.css']
})
export class CrearAdministradorComponent implements OnInit {

  admin = {
    email:'',
    contrasena:'',
    nombre:''
  };
  adminlist = [];
  
  constructor(private adminservice:AdminService) { }

  ngOnInit() {
    this.listarAdmin();
  }

  crearAdmin(){
    this.adminservice.crearAdministrador(this.admin)
    .subscribe(
      res => {
        this.admin = res;
        $("#exampleModal .close").click()
        this.listarAdmin();
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
        alert(res.notifi);
        this.listarAdmin();
      },
      err => console.log(err)
    )
  }

}
