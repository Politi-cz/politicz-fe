import { SidenavPartiesActions } from 'src/app/core/action/sidenav-parties.action';
import { SidenavPartiesState } from '../../core/state/sidenav-parties.state';
import { Select, Store } from '@ngxs/store';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
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
import { FiltersState } from 'src/app/core/state/filters.state';
import { IPartySidenavItem } from 'src/app/data/schema/political-party';
import { Permission } from '../../data/schema/permission.enum';
import { AuthenticationState } from '../../core/state/authentication.state';
import { Utils } from '../../shared/utils/utils';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('snav') sidenav!: MatSidenav;

  @ViewChild('sidenavContent', { read: MatSidenavContent }) sidenavContentScrollable: MatSidenavContent;

  @Select(FiltersState.getPartyFilterCount) partiesCount: Observable<number>;

  @Select(SidenavPartiesState.getParties) sidenavParties$: Observable<IPartySidenavItem[]>;
  
  @Select(AuthenticationState.hasPermission(Permission.ModifyPartiesPoliticians)) hasPermission$: Observable<true>;

  public mobileQuery!: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    public media: MediaMatcher,
    private _sidenavService: SidenavService,
    private _router: Router,
    private _store: Store,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 1360px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  public ngOnInit(): void {
    this._store.dispatch(new SidenavPartiesActions.GetSidenavParties());
  }

  public ngAfterViewInit(): void {
    this._sidenavService.setSidenav(this.sidenav);
  }

  public ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  public navigateToPoliticalPartyPage(id: string): void {
    this._router.navigate(['/political-party/detail/' + id]);
    this.closeSidenavIfMatches();
  }

  public toggleSidenav(): void {
    this._sidenavService.toggleSidenav();
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
