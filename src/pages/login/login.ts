import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  splash = true;
  //secondPage = SecondPagePage;

  constructor(public navCtrl: NavController) {
  }
  login(){
    this.navCtrl.push('HomePage');
  }
  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

}
