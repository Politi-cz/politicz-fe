import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { IPartySidenavItem } from './../../data/schema/party-sidenav-item';
import { PoliticalPartiesService } from './../../data/service/political-parties.service';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SidenavService } from '../../shared/service/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('snav') sidenav!: MatSidenav;

  mobileQuery!: MediaQueryList;
  sidenavParties$!: Observable<IPartySidenavItem[]>;
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

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private sidenavService: SidenavService,
    private partiesService: PoliticalPartiesService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.sidenavParties$ = this.partiesService.getPartiesForSidenav();
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
}
