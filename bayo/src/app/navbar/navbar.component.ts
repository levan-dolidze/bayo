import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  lang;
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('ka');
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'ka';
    this.lang = "ka";
  }

  changeLang(lang) {
    localStorage.setItem('lang', lang);
    this.translate.use(lang);

  }

}
