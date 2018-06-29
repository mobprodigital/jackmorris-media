import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  constructor() {
    window.addEventListener('scroll', () => {
      let topHeader: HTMLElement = document.getElementById('top-header');
      let topOffset = window.scrollY;
      if(topOffset >= topHeader.clientHeight){
        document.getElementById('main-nav').classList.add('fixed-top')
      }
      else{
        document.getElementById('main-nav').classList.remove('fixed-top')
        
      }
    })
  }

  ngOnInit() {

  }



}
