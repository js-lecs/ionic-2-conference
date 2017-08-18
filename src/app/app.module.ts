import { ScheduleDetailsPageModule } from './../pages/schedule-details/schedule-details.module';
import { SampleDataProvider } from './../providers/sample-data/sample-data';
import { SpeakersPageModule } from './../pages/speakers/speakers.module';
import { SidebarPageModule } from './../pages/sidebar/sidebar.module';

import { LoginPageModule } from './../pages/login/login.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPageModule } from "../pages/signup/signup.module";
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    LoginPageModule,
    SignupPageModule,
    SidebarPageModule,
    SpeakersPageModule,
    ScheduleDetailsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SampleDataProvider
  ]
})
export class AppModule { }
