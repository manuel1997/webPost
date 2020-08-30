import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {WebService} from '../../../services/web/web.service'
import {environment} from  '../../../../environments/environment';

@Component({
  selector: 'app-intermedio-post',
  templateUrl: './intermedio-post.component.html',
  styleUrls: ['./intermedio-post.component.css']
})
export class IntermedioPostComponent implements OnInit {

  imgRuta = environment.Url_img;
  
  postintermedios = [];

  constructor(private webservice:WebService) { }

  ngOnInit() {
    this.postIntermedios();
  }

  postIntermedios(){
    this.webservice.PostIntermedios(this.postintermedios)
    .subscribe(
      res => {
       this.postintermedios = res
      },
      err => console.log(err)
    )
  }


}
