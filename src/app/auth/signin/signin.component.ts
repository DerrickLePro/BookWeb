import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  isAuth: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(
      (user)=>{
        if(user){
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
  }
  onSignOut(){
    this.authService.signOutUser();
}

}
