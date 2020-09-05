import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin/admin.service'

declare var $: any;

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {

  categoria = [];

  form = {
    id:'',
    nombre:'',
    edit:''
  }


  constructor(private adminservice:AdminService) {
   }

  ngOnInit() {
    this.listaCategorias()
  }

  listaCategorias(){
    this.adminservice.listarCategoria(this.categoria)
    .subscribe(
      res => {
       this.categoria = res
      },
      err => console.log(err)
    )
  }

 

  crearCategoria(){
   this.adminservice.crearCategoria(this.form)
    .subscribe(
      res => {
        this.form = res;
        $("#exampleModal .close").click()
          this.listaCategorias()
      },
      err => console.log(err)
    )
  }

  verModal(nombre,id){
    $("#editModal").modal("show");
    this.form.nombre = nombre;
    this.form.edit = nombre
    this.form.id = id
 }



  editarCategoria(id:string){
    this.adminservice.editarCategoria(id,this.form)
    .subscribe(
      res => {
        this.form = res;
        $("#editModal .close").click()
          this.listaCategorias()
      },
      err => console.log(err)
    )
  }

  borrarCategoria(id:string){
    this.adminservice.eliminarCategoria(id)
      .subscribe(
        res =>{
          this.listaCategorias()
        },
        err => console.log(err)
      )
  }

}
