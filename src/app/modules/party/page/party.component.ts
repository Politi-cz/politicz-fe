import { IPolitician } from '../../../data/schema/politician';
import { PoliticalPartyState } from '../state/political-party.state';
import { FiltersState } from '../../../core/state/filters.state';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IPoliticalParty } from '../../../data/schema/political-party';
import { PoliticalParty } from '../action/political-party.action';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationState } from '../../../core/state/authentication.state';
import { Permission } from '../../../data/schema/permission.enum';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatInput } from '@angular/material/input';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss'],
  animations: [
    trigger('searchAnimation', [
      state(
        'open',
        style({
          width: '200px',
          opacity: 1,
        }),
      ),
      state(
        'closed',
        style({
          width: '0px',
          opacity: 0,
        }),
      ),
      transition('closed <=> open', [animate('0.2s')]),
    ]),
  ],
})
export class PartyComponent implements OnInit, OnDestroy {
  @Select(FiltersState.getPoliticianFilterCount) politiciansCount: Observable<number>;

  @Select(PoliticalPartyState) politicalParty$: Observable<IPoliticalParty>;

  @Select(PoliticalPartyState.getPoliticians) politicians$: Observable<IPolitician[]>;

  @Select(AuthenticationState.hasPermission(Permission.ModifyPartiesPoliticians))
  hasPermission$: Observable<boolean>;

  @ViewChild('partySearchInput') partySearchInput: MatInput;

  public searchState: string = 'closed';

  public searchControl = new FormControl('', { nonNullable: true });

  constructor(
    private _route: ActivatedRoute,
    private _store: Store,
    private _router: Router,
    private _dialog: MatDialog,
  ) {}

  public ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.searchControl.reset();
      this.searchState = 'closed';

      return this._store.dispatch(new PoliticalParty.GetPoliticalParty(params.get('id')));
    });
  }

  public ngOnDestroy(): void {
    this.searchControl.reset();
  }

  public toggleSearch(): void {
    this.searchState = this.searchState === 'closed' ? 'open' : 'closed';
    this.searchControl.reset();
  }
}
