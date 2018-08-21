import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotLoggedInPage } from './not-logged-in';

@NgModule({
  declarations: [
    NotLoggedInPage,
  ],
  imports: [
    IonicPageModule.forChild(NotLoggedInPage),
  ],
})
export class NotLoggedInPageModule {}
