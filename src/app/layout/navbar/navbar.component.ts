import { Router } from '@angular/router';
import { Component, Inject } from '@angular/core';
import { SidenavService } from '../../shared/service/sidenav.service';
import { User } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Select, Store } from '@ngxs/store';
import { AuthenticationActions } from '../../action/authentication.action';
import { AuthenticationState } from '../../state/authentication.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Select(AuthenticationState.isAuthorized) isAuthorized$: Observable<boolean>;

  @Select(AuthenticationState.user) user$: Observable<User>;

  constructor(
    @Inject(DOCUMENT) public document: Document,
    private _sidenavService: SidenavService,
    private _router: Router,
    private _store: Store,
  ) {}

  public toggleSidenav(): void {
    this._sidenavService.toggleSidenav();
  }

  public login(): void {
    this._store.dispatch(new AuthenticationActions.Login());
  }

  public logout(): void {
    this._store.dispatch(new AuthenticationActions.Logout());
  }
}
