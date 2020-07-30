import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin/admin.service'

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {

  categoria = [];
  form = {}

  constructor(private adminservice:AdminService) {

    this.adminservice.listarCategoria(this.categoria)
    .subscribe(
      res => {
       this.categoria = res
      },
      err => console.log(err)
    )
   }

  ngOnInit() {
  }

  crearCategoria(){
    this.adminservice.crearCategoria(this.form)
    .subscribe(
      res => {
        console.log(res);
        this.form = res;
      },
      err => console.log(err)
    )
  }

  borrarCategoria(id:string){
    this.adminservice.eliminarCategoria(id)
      .subscribe(
        res =>{
          console.log(res);
        },
        err => console.log(err)
      )
  }

}
