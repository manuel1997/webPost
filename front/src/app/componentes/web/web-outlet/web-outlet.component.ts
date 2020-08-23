import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-web-outlet',
  templateUrl: './web-outlet.component.html',
  styleUrls: ['./web-outlet.component.css']
})
export class WebOutletComponent implements OnInit {

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
