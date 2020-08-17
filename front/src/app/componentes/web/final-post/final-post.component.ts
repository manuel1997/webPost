import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebService } from '../../../services/web/web.service'


@Component({
  selector: 'app-final-post',
  templateUrl: './final-post.component.html',
  styleUrls: ['./final-post.component.css']
})
export class FinalPostComponent implements OnInit {

  imgRuta: string = 'http://localhost:3000/post_img/';

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
          if(this.postfinales.length == 0){return 0}
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
            this.postfinales.push({ _id: item._id, titulo: item.titulo, imagen: item.imagen });
          }
          this.getId = item._id;

        },
        err => console.log(err)
      )
  }


}
