import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var Core:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

})
export class HomeComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }
  ngAfterViewInit() {
    Core.init();
  }
 
}
