import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AdminService} from '../../../services/admin/admin.service'
import {environment} from  '../../../../environments/environment';

@Component({
  selector: 'app-listar-post',
  templateUrl: './listar-post.component.html',
  styleUrls: ['./listar-post.component.css']
})
export class ListarPostComponent implements OnInit {

  imgRuta = environment.Url_img;

  posts = [];

  constructor(
    private router:Router,
    private adminservice:AdminService
    ) { }

    ngOnInit() {
      this.adminservice.listarPost(this.posts)
      .subscribe(
        res => {
         this.posts = res
        },
        err => console.log(err)
      )
    }
  
    borrarPost(id:string){
    const opcion = confirm("¿ Esta seguro de eliminar este post ?");
    if (opcion == true) {
      this.adminservice.eliminarPost(id)
      .subscribe(
        res =>{
          console.log(res);
          this.ngOnInit();
        },
        err => console.log(err)
      )
    }
     
    }
  
    selectPost(id:string){
      this.router.navigate(['editarpost/',id]);
    }

}
