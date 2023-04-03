import { Router } from '@angular/router';
import { Component, Inject } from '@angular/core';
import { SidenavService } from '../../shared/service/sidenav.service';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    @Inject(DOCUMENT) public document: Document,
    private _sidenavService: SidenavService,
    private _router: Router,
    public auth: AuthService,
  ) {}

  public toggleSidenav(): void {
    this._sidenavService.toggleSidenav();
  }

  public login(): void {
    this.auth.loginWithRedirect();
  }

  public logout(): void {
    this.auth.logout({ logoutParams: { returnTo: this.document.location.origin } });
  }
}
