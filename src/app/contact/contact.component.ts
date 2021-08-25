import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fade } from '../modules/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    fade
  ]
})

export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  courses: any[];
  user;
  isDisplayed = false;
  isDisplayedSent = true;
  constructor(db: AngularFireDatabase, private http: HttpClient, private router: Router) {
    db.list('/message').valueChanges().subscribe(coursesData => {
      this.courses = coursesData;
      console.log(this.courses);

    })
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      userLastname: new FormControl(null, [Validators.required]),
      userEmail: new FormControl(null, [Validators.required]),
      userText: new FormControl(null, [Validators.required])

    });

  }

  onSubmit(userData) {
    this.http.post('https://bayocontact-a7f9d-default-rtdb.firebaseio.com/message.json', `${JSON.stringify(userData)}`).subscribe(responseData => {
      console.log(responseData);
      this.isDisplayed = true;
      this.isDisplayedSent = false;
      setTimeout(() => {
        this.router.navigate([''])
      }, 2000);
    });
  }



}

