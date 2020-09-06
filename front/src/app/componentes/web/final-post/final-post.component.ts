import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../../../services/web/web.service'
import {environment} from  '../../../../environments/environment';



@Component({
  selector: 'app-final-post',
  templateUrl: './final-post.component.html',
  styleUrls: ['./final-post.component.css']
})
export class FinalPostComponent implements OnInit {

  imgRuta = environment.Url_img;

  postfinales = [];

  cargar_mas = [];
  page:any;
  getId:string;
  total:any;


  constructor(private webservice: WebService) { 
  }


  ngOnInit() {
    this.postFinales();
    
  }

  postFinales() {
    this.webservice.postFinales(this.postfinales)
      .subscribe(
        res => {
          this.postfinales = res['posts']
         
          this.page = res['page'];
         this.getId = this.postfinales[2]['_id']
          
        },
        err => console.log(err)
      )
  }

  obtenerMas() {
    let pagSig = Number(this.page) + 1;
    this.webservice.postFinales2(this.cargar_mas,pagSig,this.getId)
      .subscribe(
        res => {
          this.cargar_mas = res['posts']
          this.page = res['page'];
            this.total = res ['total'];
          for (let i = 0; i < 3; i++) {
            var item = this.cargar_mas[i];
            this.postfinales.push({ _id: item._id, url:item.url, createdAt:item.createdAt, titulo: item.titulo, imagen: item.imagen, categoria:item.categoria });
          }
          this.getId = item._id;

        },
        err => console.log(err)
      )
  }


}
