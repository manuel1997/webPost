import { Component, OnInit } from '@angular/core';
import {WebService} from '../../../services/web/web.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-web-navbar',
  templateUrl: './web-navbar.component.html',
  styleUrls: ['./web-navbar.component.css']
})
export class WebNavbarComponent implements OnInit {

  categorias = [];

  post:any = {}
  
  constructor(private webservice:WebService, private router: Router,) 
  {
    this.webservice.categorias(this.categorias)
    .subscribe(
      res => {
       this.categorias = res
      },
      err => console.log(err)
    )
   }

  ngOnInit() {
  }

  verPost() {
    this.router.navigate(['/busqueda/'+this.post.buscar]);
  }

}
