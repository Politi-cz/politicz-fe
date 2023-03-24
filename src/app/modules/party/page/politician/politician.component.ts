import { PoliticalPartyState } from '../../../../state/political-party.state';
import { Router } from '@angular/router';
import { IPolitician } from '../../../../data/schema/politician';
import { Component, Input } from '@angular/core';
import { ActionType, QuickMenuAction } from 'src/app/data/schema/quick-menu-action';
import { Store } from '@ngxs/store';
import { PoliticalParty } from '../../../../action/political-party.action';
import { IConfirmDialogData } from '../../../../data/schema/dialog';
import { ConfirmDialogComponent } from '../../../../shared/component/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-politician',
  templateUrl: './politician.component.html',
  styleUrls: ['./politician.component.scss'],
})
export class PoliticianComponent {
  @Input() politician: IPolitician;

  constructor(private _store: Store, private _router: Router, private _dialog: MatDialog) {}

  public handleActionEvent(action: QuickMenuAction): void {
    const politicalPartyId = this._store.selectSnapshot(PoliticalPartyState.getPoliticalPartyId);

    switch (action.type) {
      case ActionType.EDIT:
        this._router.navigate([
          '/political-party/detail',
          politicalPartyId,
          'edit-politician',
          this.politician.id,
        ]);
        break;
      case ActionType.DELETE:
        this.openDialogAndRemovePolitician();
        break;
    }
  }

  private openDialogAndRemovePolitician() {
    const dialogData: IConfirmDialogData = {
      title: 'dialog-remove',
      content: 'remove-politician-content',
      confirmButtonText: 'remove-politician',
      closeButtonText: 'dialog-action-cancel',
    };
    const dialogRef = this._dialog.open(ConfirmDialogComponent, {
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this._store.dispatch(new PoliticalParty.RemovePolitician(this.politician));
      }
    });
  }
}
