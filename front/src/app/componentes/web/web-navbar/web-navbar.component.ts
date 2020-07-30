import { Component, OnInit } from '@angular/core';
import {WebService} from '../../../services/web/web.service'

@Component({
  selector: 'app-web-navbar',
  templateUrl: './web-navbar.component.html',
  styleUrls: ['./web-navbar.component.css']
})
export class WebNavbarComponent implements OnInit {

  categorias = [];
  
  constructor(private webservice:WebService) 
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

}
