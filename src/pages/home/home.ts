import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	clickMessage = '';

  constructor(public navCtrl: NavController) {


  }
  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

}
