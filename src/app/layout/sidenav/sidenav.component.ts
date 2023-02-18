import { Select, Store } from '@ngxs/store';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, tap } from 'rxjs';
import { PoliticalPartiesService } from './../../data/service/political-parties.service';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SidenavService } from '../../shared/service/sidenav.service';
import { Router } from '@angular/router';
import { Filters } from 'src/app/action/filters.action';
import { FiltersState } from 'src/app/state/filters.state';
import { IPartySidenavItem } from 'src/app/data/schema/political-party';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('snav') sidenav!: MatSidenav;

  @Select(FiltersState.getPartyFilterCount) partiesCount: Observable<number>;

  mobileQuery!: MediaQueryList;

  sidenavParties$!: Observable<IPartySidenavItem[]>;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private sidenavService: SidenavService,
    private partiesService: PoliticalPartiesService,
    private router: Router,
    private store: Store
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 1360px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
    //TODO Should be observable and get parties from state. For example, when new party is added, should be also added here
    this.sidenavParties$ = this.partiesService
      .getPartiesForSidenav()
      .pipe(tap((data) => this.store.dispatch(new Filters.Set({ partyFilterCount: data.length }))));
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  navigateToPoliticalPartyPage(id: string) {
    this.router.navigate(['/political-party/' + id]);
  }

  toggleSidenav() {
    this.sidenavService.toggleSidenav();
  }
}
