import { QuickMenuAction, ActionType } from './../../../data/schema/quick-menu-action';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-admin-quick-menu-actions',
  templateUrl: './admin-quick-menu-actions.component.html',
  styleUrls: ['./admin-quick-menu-actions.component.scss'],
})
export class AdminQuickMenuActionsComponent {
  @Input() actions: QuickMenuAction[];

  @Output() actionClickEvt = new EventEmitter<QuickMenuAction>();

  actionTypes = ActionType;

  onClick(action: QuickMenuAction) {
    this.actionClickEvt.emit(action);
  }
}
