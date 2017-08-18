import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SampleDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SampleDataProvider {

  constructor(public http: Http) {
    console.log('Hello SampleDataProvider Provider');
  }


  getSampleData() {
    return this.http.get('assets/data/sample.json')
      .map((response) => response.json());
  }
}
