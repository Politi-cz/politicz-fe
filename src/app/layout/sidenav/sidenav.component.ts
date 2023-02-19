import { SidenavPartiesActions } from 'src/app/core/action/sidenav-parties.action';
import { SidenavPartiesState } from './../../core/state/sidenav-parties.state';
import { Select, Store } from '@ngxs/store';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
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

  @Select(SidenavPartiesState.getParties) sidenavParties$: Observable<IPartySidenavItem[]>;

  mobileQuery!: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private sidenavService: SidenavService,
    private partiesService: PoliticalPartiesService,
    private router: Router,
    private store: Store,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 1360px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  public ngOnInit(): void {
    this.store.dispatch(new SidenavPartiesActions.GetSidenavParties());
  }

  public ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  public ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  public navigateToPoliticalPartyPage(id: string): void {
    this.router.navigate(['/political-party/' + id]);
  }

  public toggleSidenav(): void {
    this.sidenavService.toggleSidenav();
  }
}
