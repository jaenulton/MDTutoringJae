import { Component } from '@angular/core';

import { TutorsPage } from '../tutors/tutors';
import { ClassesPage } from '../classes/classes';
import { HomePage } from '../home/home';
import { GiveBackPage } from '../give-back/give-back';
import { RewardsPage } from '../rewards/rewards';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = GiveBackPage;
  tab3Root = RewardsPage;
  tab4Root = TutorsPage;
  tab5Root = ClassesPage;

  constructor() {

  }
}