import { PoliticalParty } from '../../../../action/political-party.action';
import { PoliticalPartyState } from '../../../../state/political-party.state';
import { Store } from '@ngxs/store';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { IPoliticalParty } from '../../../../data/schema/political-party';
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

  public ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      this._store.dispatch(new PoliticalParty.GetPoliticalParty(params.get('id')));
      this.politicalParty$ = this._store.select(PoliticalPartyState.getPoliticalParty);
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
  }

  public onSubmit(party: IPoliticalParty): void {
    const currentPoliticalParty = this._store.selectSnapshot(PoliticalPartyState.getPoliticalParty);
    this._store
      .dispatch(
        new PoliticalParty.UpdatePoliticalParty({
          ...party,
          id: currentPoliticalParty.id,
          politicians: [...currentPoliticalParty.politicians],
        }),
      )
      .subscribe(() => this.navigateBack(currentPoliticalParty.id!));
  }

  public navigateBack(id: string): void {
    this._router.navigate(['/political-party/detail/' + id]);
  }
}
