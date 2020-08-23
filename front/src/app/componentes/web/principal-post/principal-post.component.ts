import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {WebService} from '../../../services/web/web.service'
import * as Global from  '../../../global';

@Component({
  selector: 'app-principal-post',
  templateUrl: './principal-post.component.html',
  styleUrls: ['./principal-post.component.css']
})
export class PrincipalPostComponent implements OnInit {

  imgRuta = Global.Url_img;

  post1 = [];
  post2 = [];
  post3 = [];

  constructor(private webservice:WebService) { }

  ngOnInit() {
    this.post_1();
    this.post_2();
    this.post_3();
  }

  post_1(){
    this.webservice.Post1(this.post1)
    .subscribe(
      res => {
       this.post1 = res
      },
      err => console.log(err)
    )
  }

  post_2(){
    this.webservice.Post2(this.post2)
    .subscribe(
      res => {
       this.post2 = res
      },
      err => console.log(err)
    )
  }

  post_3(){
    this.webservice.Post3(this.post3)
    .subscribe(
      res => {
       this.post3 = res
      },
      err => console.log(err)
    )
  }

}
