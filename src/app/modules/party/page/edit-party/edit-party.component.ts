import { IPoliticalPartyPolticiansFree } from './../../../../data/schema/political-party-politicians-free';
import { PoliticalParty } from '../../action/political-party.action';
import { politicalPartyState } from './../../state/political-party.state';
import { Store } from '@ngxs/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { IPoliticalParty } from './../../../../data/schema/political-party';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-edit-party',
  templateUrl: './edit-party.component.html',
  styleUrls: ['./edit-party.component.scss'],
})
export class EditPartyComponent implements OnInit, OnDestroy {
  politicalParty$: Observable<IPoliticalParty>;

  private destroy$ = new Subject<void>();

  constructor(private _route: ActivatedRoute, private _router: Router, private _store: Store) {}

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      this._store.dispatch(new PoliticalParty.GetPoliticalParty(params.get('id')));
      this.politicalParty$ = this._store.select(politicalPartyState.getPoliticalParty);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  public onSubmit(party: IPoliticalPartyPolticiansFree) {
    const currentPoliticalParty = this._store.selectSnapshot(politicalPartyState);
    this._store
      .dispatch(new PoliticalParty.UpdatePoliticalParty({ ...party, id: currentPoliticalParty.id }))
      .subscribe(() => this.navigateBack(currentPoliticalParty.id));
  }

  public navigateBack(id: string) {
    this._router.navigate(['/political-party/' + id]);
  }
}
