import { ScheduleDetailsPage } from './../schedule-details/schedule-details';
import { SampleDataProvider } from './../../providers/sample-data/sample-data';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  groups: Array<any> = [];
  constructor(public navCtrl: NavController, public sampleDataProvider: SampleDataProvider) {
    this.sampleDataProvider.getSampleData().subscribe((data) => {
      this.groups = data.schedule;
    });
  }

  goToSessionDetail(session) {

    this.navCtrl.push(ScheduleDetailsPage, { session: session });
  }


}
