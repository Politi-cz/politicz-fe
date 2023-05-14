import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthenticationActions } from './action/authentication.action';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _store: Store, private _router: Router) {}

  public ngOnInit(): void {
    this._store.dispatch(new AuthenticationActions.Set());

    //Workaround for bug on mobile devices that you are not scrolled up when changing route
    this._router.events.subscribe((event: any) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      document.body.scrollTop = 0;
    });
  }
}
