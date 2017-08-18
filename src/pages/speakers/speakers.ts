import { SampleDataProvider } from './../../providers/sample-data/sample-data';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpeakersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})
export class SpeakersPage {

  speakers: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public sampleDataProvider: SampleDataProvider) {
    this.sampleDataProvider.getSampleData().subscribe(data => {
      this.speakers = data.speakers;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpeakersPage');
  }

}
