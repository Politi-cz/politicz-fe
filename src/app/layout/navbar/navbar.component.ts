import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  links = ['home', 'kokot'];
  activeLink = this.links[0];
  background: ThemePalette = 'primary';

  constructor() {}
}
