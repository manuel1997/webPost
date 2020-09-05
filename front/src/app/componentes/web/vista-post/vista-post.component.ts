import { Component, OnInit } from '@angular/core';
import { Title,Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { WebService } from '../../../services/web/web.service'
import { DomSanitizer } from '@angular/platform-browser'
import {environment} from  '../../../../environments/environment';


@Component({
  selector: 'app-vista-post',
  templateUrl: './vista-post.component.html',
  styleUrls: ['./vista-post.component.css']
})
export class VistaPostComponent implements OnInit {

  imgRuta = environment.Url_img;

  titulo: string;
  id: string;
  contenido: any;
  posts: any = {};

  postRelacionados = [];

  constructor(
    private title:Title,
    private meta: Meta,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private webservice: WebService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.titulo = params['url'];
      this.id = params['id'];
      this.webservice.verPost(this.titulo, this.id)
        .subscribe(
          res => {
            this.title.setTitle(res.titulo);
            this.meta.updateTag({name: 'description',content: res.sumario})
          
            this.posts.imagen = res.imagen
            this.posts.titulo = res.titulo
            this.posts.alt = res.alt
            this.contenido = this.sanitizer.bypassSecurityTrustHtml(res.descripcion);
            this.posts.categoria = res.categoria

            this.webservice.relacionados(this.posts.categoria,this.id)
              .subscribe(
                res => {
                  this.postRelacionados = res
                },
                err => console.log(err)
              )

          },
          err => console.log(err)
        )
    });
  }

}
