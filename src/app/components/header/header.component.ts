import { Component, OnInit } from '@angular/core';

declare const $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.initMaterializeCssComponents();
  }

  initMaterializeCssComponents() {
    $('.button-collapse').sideNav();
    $(".dropdown-button").dropdown();
  }

}
