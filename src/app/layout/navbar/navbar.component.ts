import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { SidenavService } from '../../shared/service/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private _sidenavService: SidenavService, private _router: Router) {}

  toggleSidenav(): void {
    this._sidenavService.toggleSidenav();
  }
}
