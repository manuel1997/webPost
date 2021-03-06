import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Title,Meta } from '@angular/platform-browser';
import {WebService} from '../../../services/web/web.service'
import {environment} from  '../../../../environments/environment';

@Component({
  selector: 'app-vista-categoria',
  templateUrl: './vista-categoria.component.html',
  styleUrls: ['./vista-categoria.component.css']
})
export class VistaCategoriaComponent implements OnInit {

  imgRuta = environment.Url_img;
  
  posts = [];
  nombre:any;
  
  itemsTotal:number;
  page:number;
  pageSelect:number;
  itemsXpagina:number;
  pagesTotal:number;

  constructor(
    private webservice:WebService,
    private activateRoute:ActivatedRoute,
    private router:Router,
    private title:Title,
    private meta: Meta,
    ) 
    {
    this.activateRoute.params.subscribe(params => {
      this.nombre = params['nombre'];
      this.page = params['numpage'];
      this.webservice.PostCategorias(this.nombre,this.page)
        .subscribe(
          res => {
            this.title.setTitle('categoria '+this.nombre + ' | Enaltagama');
            this.meta.updateTag({name: 'description',content:'contenido ordenado por categoria '+this.nombre})

            this.posts = res['posts'];
            this.pageSelect = res['pageSelect']
            this.itemsTotal = res['itemsTotal'];
            this.itemsXpagina = res['itemsXpagina'];
            this.pagesTotal = res['pagesTotal'];
           // this.html = this.sanitizer.bypassSecurityTrustHtml(this.post.descripcion) ; [innerHTML]="html"
          },
          err => console.log(err)
        )
    })
   }

  ngOnInit() {
  }

  public onPageChange(pageNum: number): void {
    this.router.navigate(['/categoria/'+this.nombre+'/'+pageNum]);
  }

}
