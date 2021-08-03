import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
lang;
  constructor() { }

  ngOnInit() {
this.lang=localStorage.getItem('lang')||'en';

  }

changeLang(lang){
localStorage.setItem('lang',lang);
window.location.reload();

}

}
