import { MatSidenav } from '@angular/material/sidenav';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  private _sidenav!: MatSidenav;

  public setSidenav(sidenav: MatSidenav): void {
    this._sidenav = sidenav;
  }

  public toggleSidenav(): void {
    this._sidenav.toggle();
  }
}
