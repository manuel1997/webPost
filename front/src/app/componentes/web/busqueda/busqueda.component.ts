import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WebService} from '../../../services/web/web.service'

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {


  imgRuta:string ='http://localhost:3000/post_img/';

  posts:any = [];
  datos:string;
  msg:string;

  constructor(
    private activateRoute: ActivatedRoute,
    private webservice:WebService,
  ) { 
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.datos = params['datos'];
      this.webservice.busquedaPost(this.datos)
        .subscribe(
          res => {
            this.posts = res
            if (this.posts.length >= 1){
              this.msg = `Resultados de: ${this.datos}`;
             }else{
               this.msg = "No se encontraron resultados.";
             }
          },
          err => console.log(err)
        )
  });

 
  }

}
