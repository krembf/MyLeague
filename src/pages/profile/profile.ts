import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  first_name: string;
  last_name: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  saveForm() {
    let name = 
    { 
      firstName: this.first_name, 
      lastName: this.last_name,
    }
    console.log('saving name');
    // this.storage.set('location', JSON.stringify(location)).then(() => {
    //   this.navCtrl.push(HomePage);
    // });
  }  
}
