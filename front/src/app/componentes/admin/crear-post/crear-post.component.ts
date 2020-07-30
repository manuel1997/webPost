import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../../services/admin/admin.service'
import {LoginService} from '../../../services/admin/login.service'
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Router} from '@angular/router';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-crear-post',
  templateUrl: './crear-post.component.html',
  styleUrls: ['./crear-post.component.css']
})
export class CrearPostComponent implements OnInit {

  public Editor = ClassicEditor ;

  categorias =  [];

  post:any = { 
    titulo:'',
    categoria:'0',
    status:'0',
    descripcion: ''
  }

  admin:any;

  file:File;
  photoSelected: string | ArrayBuffer;

  constructor(
    private adminservice:AdminService,
    private loginservce:LoginService,
    private router:Router,
    ) {

   this.admin = this.loginservce.obtenerAdmin();
    this.admin = this.admin._id

   }

  ngOnInit() {
    this.listaCategorias();
  }

  listaCategorias(){
    this.adminservice.listarCategoria(this.categorias)
    .subscribe(
      res => {
        this.categorias = res;
      },
      err => console.log(err)
    )
  }

  onPhotoselected(event:HtmlInputEvent): void{
    if (event.target.files && event.target.files[0]){
      this.file = <File>event.target.files[0];
      //Image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  crearPost(){
    this.adminservice.crearPost(this.file,this.admin,this.post)
    .subscribe(
      res => {
        this.post = res;
        this.router.navigate(['/adminpost']);
        alert(res.notifi);
      },
      err => console.log(err)
    )
  }

}
