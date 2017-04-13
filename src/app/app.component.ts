import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { views } from './app-nav-views';
import { MOBILE } from './services/constants';
import { environment } from '../environments/environment';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  showMonitor = (!environment.production);
  mobile = MOBILE;
  sideNavMode = MOBILE ? 'over' : 'side';
  views = views;

  constructor(
    public route: ActivatedRoute,
    public router: Router
  ) { }

  activateEvent(event) {
    if (!environment.production) {
      console.log('Activate Event:', event);
    }
  }

  deactivateEvent(event) {
    if (!environment.production) {
      console.log('Deactivate Event', event);
    }
  }
}
