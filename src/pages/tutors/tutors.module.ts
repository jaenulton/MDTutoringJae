import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutorsPage } from './tutors';

@NgModule({
  declarations: [
    TutorsPage,
  ],
  imports: [
    IonicPageModule.forChild(TutorsPage),
  ],
})
export class TutorsPageModule {}
