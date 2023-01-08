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

  constructor(private store: Store) {}

  handleActionEvent(action: QuickMenuAction) {
    switch (action.type) {
      case ActionType.EDIT:
        alert('Zedituju tě more');
        break;
      case ActionType.DELETE:
        this.store.dispatch(new PoliticalParty.RemovePolitician(this.politician));
        break;
    }
  }
}
