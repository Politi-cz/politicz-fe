import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnDestroy, AfterViewInit {
  @ViewChild('snav') sidenav!: MatSidenav;

  mobileQuery!: MediaQueryList;
  partiesAndLogos: { name: string; img: string; id: string }[] = [
    {
      name: 'Pirátská strana',
      img: 'assets/party-logos/pirati.svg',
      id: 'pirati',
    },
    {
      name: 'Svoboda a přímá demokracie',
      img: 'assets/party-logos/spd.png',
      id: 'spd',
    },
  ];

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private sidenavService: SidenavService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
