import { MatSidenav } from '@angular/material/sidenav';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private _sidenav!: MatSidenav;

  setSidenav(sidenav: MatSidenav) {
    this._sidenav = sidenav;
  }

  toggleSidenav() {
    this._sidenav.toggle();
  }
}
