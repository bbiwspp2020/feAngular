import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'damo-wed';
  url: any
  constructor() {
    this.url = window.location.pathname == '/' || window.location.pathname == '/login' || window.location.pathname == '/register' ? false : true
  }

  ngOnInit() {
    console.log(this.url);
  }
}
