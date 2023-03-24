import { IPolitician } from '../../../data/schema/politician';
import { PoliticalPartyState } from '../state/political-party.state';
import { FiltersState } from '../../../state/filters.state';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IPoliticalParty } from '../../../data/schema/political-party';
import { PoliticalParty } from '../action/political-party.action';
import { ConfirmDialogComponent } from '../../../shared/component/confirm-dialog/confirm-dialog.component';
import { IConfirmDialogData } from '../../../data/schema/dialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.scss'],
})
export class PartyComponent implements OnInit {
  @Select(FiltersState.getPoliticianFilterCount) politiciansCount: Observable<number>;

  @Select(PoliticalPartyState) politicalParty$: Observable<IPoliticalParty>;

  @Select(PoliticalPartyState.getPoliticians) politicians$: Observable<IPolitician[]>;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private _router: Router,
    private dialog: MatDialog,
  ) {}

  public ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      return this.store.dispatch(new PoliticalParty.GetPoliticalParty(params.get('id')));
    });
  }

  public openDialogAndRemoveParty(): void {
    const dialogData: IConfirmDialogData = {
      title: 'dialog-remove',
      content: 'remove-party-content',
      confirmButtonText: 'remove-party',
      closeButtonText: 'dialog-action-cancel',
    };
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.removeParty();
      }
    });
  }

  private removeParty(): void {
    const partyId = this.store.selectSnapshot(PoliticalPartyState.getPoliticalPartyId);

    if (partyId) {
      this.store
        .dispatch(new PoliticalParty.RemovePoliticalParty(partyId))
        .subscribe(() => this._router.navigate(['/news']));
    }
  }
}
