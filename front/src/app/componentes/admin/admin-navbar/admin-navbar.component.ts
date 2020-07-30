import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/admin/login.service'

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor( private loginservice:LoginService) { }

  ngOnInit() {
  }

}
