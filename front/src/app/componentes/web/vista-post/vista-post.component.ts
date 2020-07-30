import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WebService} from '../../../services/web/web.service'
import { DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-vista-post',
  templateUrl: './vista-post.component.html',
  styleUrls: ['./vista-post.component.css']
})
export class VistaPostComponent implements OnInit {

  titulo:string;
  id:string;
  contenido:any;
  posts:any = {};
 
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private webservice:WebService,
    private sanitizer:DomSanitizer,
    ) {}

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.titulo = params['nombre'];
      this.titulo = this.titulo.replace(/\+|-/g, " ");
      this.id = params['id'];   
      this.webservice.verPost(this.titulo,this.id)
        .subscribe(
          res => {
            console.log(res);
            this.posts.imagen = res.imagen
            this.posts.titulo = res.titulo
            this.contenido = this.sanitizer.bypassSecurityTrustHtml(res.descripcion);
          },
          err => console.log(err)
        )
  });
  }

}
