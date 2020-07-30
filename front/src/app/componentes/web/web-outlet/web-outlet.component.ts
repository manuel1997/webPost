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

  scrollTop(event){
      window.scroll(0,50)
  }

  ngOnInit() {
    (function ($) {
      'use strict';
  
      var browserWindow = $(window);
  
      // :: 1.0 Preloader Active Code
      browserWindow.on('load', function () {
          $('.preloader').fadeOut('slow', function () {
              $(this).remove();
          });
      });
  
      // :: 2.0 Nav Active Code
      if ($.fn.classyNav) {
          $('#newsboxNav').classyNav();
      }
  
      // :: 3.0 Newsticker Active Code
      if ($.fn.simpleTicker) {
          $.simpleTicker($("#breakingNewsTicker"), {
              speed: 1000,
              delay: 3000,
              easing: 'swing',
              effectType: 'roll'
          });
      }

  
      // :: 6.0 ScrollUp Active Code
      if ($.fn.scrollUp) {
          browserWindow.scrollUp({
              scrollSpeed: 1500,
              scrollText: '<i class="fa fa-angle-up"></i>'
          });
      }
  
      // :: 7.0 CounterUp Active Code
      if ($.fn.counterUp) {
          $('.counter').counterUp({
              delay: 10,
              time: 2000
          });
      }
  
      // :: 8.0 Progress Bar Active Code
      if ($.fn.circleProgress) {
          $('#circle').circleProgress({
              size: 160,
              emptyFill: "rgba(0, 0, 0, .0)",
              fill: '#a2a2a2',
              thickness: '3',
              reverse: true
          });
          $('#circle2').circleProgress({
              size: 160,
              emptyFill: "rgba(0, 0, 0, .0)",
              fill: '#a2a2a2',
              thickness: '3',
              reverse: true
          });
          $('#circle3').circleProgress({
              size: 160,
              emptyFill: "rgba(0, 0, 0, .0)",
              fill: '#a2a2a2',
              thickness: '3',
              reverse: true
          });
          $('#circle4').circleProgress({
              size: 160,
              emptyFill: "rgba(0, 0, 0, .0)",
              fill: '#a2a2a2',
              thickness: '3',
              reverse: true
          });
      }
  
      // :: 9.0 Tooltip Active Code
      if ($.fn.tooltip) {
          $('[data-toggle="tooltip"]').tooltip()
      }
  
      // :: 10.0 Prevent Default a Click
      $('a[href="#"]').on('click', function ($) {
          $.preventDefault();
      });
  
  })(jQuery);
  }

}
