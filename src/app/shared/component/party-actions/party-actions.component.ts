import { Component, Input } from '@angular/core';
import { IConfirmDialogData } from '../../../data/schema/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { PoliticalPartyState } from '../../../modules/party/state/political-party.state';
import { PoliticalParty } from '../../../modules/party/action/political-party.action';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-party-actions',
  templateUrl: './party-actions.component.html',
  styleUrls: ['./party-actions.component.scss'],
})
export class PartyActionsComponent {
  @Input() partyId: string;

  @Input() disableTooltip: boolean = false;

  @Input() iconName = 'more_vert';

  constructor(private _dialog: MatDialog, private _store: Store, private _router: Router) {}

  public openDialogAndRemoveParty(): void {
    const dialogData: IConfirmDialogData = {
      title: 'dialog-remove',
      content: 'remove-party-content',
      confirmButtonText: 'remove-party',
      closeButtonText: 'dialog-action-cancel',
    };
    const dialogRef = this._dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.removeParty();
      }
    });
  }

  private removeParty(): void {
    const partyId = this._store.selectSnapshot(PoliticalPartyState.getPoliticalPartyId);

    if (partyId) {
      this._store
        .dispatch(new PoliticalParty.RemovePoliticalParty(partyId))
        .subscribe(() => this._router.navigate(['/news']));
    }
  }
}
