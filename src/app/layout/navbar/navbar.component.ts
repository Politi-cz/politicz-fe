import { Component } from '@angular/core';
import { SidenavService } from '../sidenav/sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private sidenavService: SidenavService) {}

  toggleSidenav(): void {
    this.sidenavService.toggleSidenav();
  }
}
