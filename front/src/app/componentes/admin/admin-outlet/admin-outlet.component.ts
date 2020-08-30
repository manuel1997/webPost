import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-admin-outlet',
  templateUrl: './admin-outlet.component.html',
  styleUrls: ['./admin-outlet.component.css']
})
export class AdminOutletComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    (function ($) {
      'use strict';
  
      if ($.fn.classyNav) {
          $('#newsboxNav').classyNav();
      }
  })(jQuery);
  }

}
