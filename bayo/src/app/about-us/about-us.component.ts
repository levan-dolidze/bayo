import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  posts = [];
  constructor(private http: HttpClient) { }


  ngOnInit(): void {


    this.http.get('https://type.fit/api/quotes')

      .subscribe(
        (post: any[]) => this.posts = post
      );

  }

}
