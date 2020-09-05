import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from '../../../services/admin/admin.service'
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {environment} from  '../../../../environments/environment';

@Component({
  selector: 'app-editar-post',
  templateUrl: './editar-post.component.html',
  styleUrls: ['./editar-post.component.css']
})
export class EditarPostComponent implements OnInit {
  
  imgRuta = environment.Url_img;

  public Editor = ClassicEditor ;
  
  categorias = [];
  
  id:string;
  post:any;

  constructor(
    private adminservice:AdminService,
    private activateRoute:ActivatedRoute,
    private router:Router,
    ) {
      this.adminservice.listarCategoria(this.categorias)
    .subscribe(
      res => {
        console.log(res);
        this.categorias = res;
      },
      err => console.log(err)
    )
     }

     ngOnInit() {
    
      this.activateRoute.params.subscribe(params => {
        this.id = params['id'];
        this.adminservice.verPost(this.id)
          .subscribe(
            res => {
              console.log(res);
              this.post = res;
            },
            err => console.log(err)
          )
      })
    }
  
    editarpost(){
      this.adminservice.editarPost(this.post)
      .subscribe(
          res => {
            console.log(res);
           this.post = res;
           this.ngOnInit();
  
          },
          err => console.log(err)
        )
    }

}
