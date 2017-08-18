import { SpeakersPage } from './../speakers/speakers';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SidebarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sidebar',
  templateUrl: 'sidebar.html',
})
export class SidebarPage {

  rootPage: any = HomePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SidebarPage');
  }
  navigate(page) {
    switch (page) {
      case 'Speakers':
        this.rootPage = SpeakersPage;
        break;

      case 'Schedule':
        this.rootPage = HomePage;
        break;
    }

  }
}
