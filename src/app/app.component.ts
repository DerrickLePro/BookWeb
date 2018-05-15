import { Component } from '@angular/core';
import  * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    // Initialize Fire base
    const config = {
      apiKey: "AIzaSyAyShE9o3brG9tr_MR773e-vDxxG4ySzLg",
      authDomain: "bookweb-42751.firebaseapp.com",
      databaseURL: "https://bookweb-42751.firebaseio.com",
      projectId: "bookweb-42751",
      storageBucket: "",
      messagingSenderId: "607739181222"
    };
    firebase.initializeApp(config);

  }
  title = 'app';
}
