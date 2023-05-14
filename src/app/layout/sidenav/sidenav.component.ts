import { Select } from '@ngxs/store';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { SidenavService } from '../../shared/service/sidenav.service';
import { Router } from '@angular/router';
import { FiltersState } from 'src/app/state/filters.state';
import { IPoliticalParty } from 'src/app/data/schema/political-party';
import { PoliticalPartyState } from '../../state/political-party.state';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnDestroy, AfterViewInit {
  @ViewChild('snav') sidenav!: MatSidenav;

  @ViewChild('sidenavContent', { read: MatSidenavContent }) sidenavContentScrollable: MatSidenavContent;

  @Select(FiltersState.getPartyFilterCount) partiesCount: Observable<number>;

  @Select(PoliticalPartyState.getAllParties) sidenavParties$: Observable<IPoliticalParty[]>;

  mobileQuery!: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private sidenavService: SidenavService,
    private router: Router,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 1360px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  public ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  public ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  public navigateToPoliticalPartyPage(id: string): void {
    this.router.navigate(['/political-party/detail/' + id]);
    this.closeSidenavIfMatches();
  }

  public toggleSidenav(): void {
    this.sidenavService.toggleSidenav();
  }

  public closeSidenavIfMatches(): void {
    if (this.mobileQuery.matches) {
      this.toggleSidenav();
    }
  }

  /**
   * Scroll mat-sidenav-content to top when user changes route.
   * Only solution that is working, for more info see this thread:
   * https://stackoverflow.com/questions/55512351/scrolling-to-top-in-angular-after-route-change-and-new-component-loads-not-worki
   */
  public scrollToTop(): void {
    const currentUrl = this._router.routerState.snapshot.url;

    if (this.sidenavContentScrollable && !Utils.FORBIDDEN_SCROLL_URL.includes(currentUrl)) {
      this.sidenavContentScrollable.scrollTo({ top: 0 });
    }
  }
}
