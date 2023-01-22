import { Router } from '@angular/router';
import { IPolitician } from './../../../../data/schema/politician';
import { Component, Input, OnInit } from '@angular/core';
import { ActionType, QuickMenuAction } from 'src/app/data/schema/quick-menu-action';
import { Store } from '@ngxs/store';
import { PoliticalParty } from '../../action/political-party.action';

@Component({
  selector: 'app-politician',
  templateUrl: './politician.component.html',
  styleUrls: ['./politician.component.scss'],
})
export class PoliticianComponent {
  @Input() politician: IPolitician;

  constructor(private _store: Store, private _router: Router) {}

  handleActionEvent(action: QuickMenuAction) {
    switch (action.type) {
      case ActionType.EDIT:
        this._router.navigate(['/political-party', 'edit', this.politician.id]);
        break;
      case ActionType.DELETE:
        this._store.dispatch(new PoliticalParty.RemovePolitician(this.politician));
        break;
    }
  }
}
