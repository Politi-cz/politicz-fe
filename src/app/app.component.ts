import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthenticationActions } from './core/action/authentication.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private _store: Store) {}

  public ngOnInit(): void {
    this._store.dispatch(new AuthenticationActions.Set());
  }
}
