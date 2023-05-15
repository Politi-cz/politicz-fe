import { Router } from '@angular/router';
import { Component, Inject } from '@angular/core';
import { SidenavService } from '../../shared/service/sidenav.service';
import { User } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Select, Store } from '@ngxs/store';
import { AuthenticationActions } from '../../core/action/authentication.action';
import { AuthenticationState } from '../../core/state/authentication.state';
import { map, Observable, share } from 'rxjs';
import { Permission } from '../../data/schema/permission.enum';
import { Utils } from '../../shared/utils/utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Select(AuthenticationState.isAuthorized) isAuthorized$: Observable<boolean>;

  @Select(AuthenticationState.user) user$: Observable<User>;

  public hasPermission$ = this._store.select(AuthenticationState.permissions).pipe(
    map((permissions: string[] | undefined) => {
      return Utils.checkPermission(permissions, Permission.ModifyPartiesPoliticians);
    }),
    share(),
  );

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
