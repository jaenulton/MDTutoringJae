import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsPage } from '../pages/news/news';
import { ProfilePage } from '../pages/profile/profile';
import { ClassesPage } from '../pages/classes/classes';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { NotLoggedInPage } from '../pages/not-logged-in/not-logged-in';
import { GiveBackPage } from '../pages/give-back/give-back';
import { RewardsPage } from '../pages/rewards/rewards';
import { TutorsPage } from '../pages/tutors/tutors';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    NotLoggedInPage,
    LoginPage,
    RegisterPage,
    NewsPage,
    ClassesPage,
    ProfilePage,
    GiveBackPage,
    RewardsPage,
    TutorsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    NewsPage,
    ProfilePage,
    ClassesPage,
    RegisterPage,
    LoginPage,
    NotLoggedInPage,
    GiveBackPage,
    RewardsPage,
    TutorsPage,
    TabsPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
