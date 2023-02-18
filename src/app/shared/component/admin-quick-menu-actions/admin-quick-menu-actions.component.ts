import { QuickMenuAction, ActionType } from './../../../data/schema/quick-menu-action';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-quick-menu-actions',
  templateUrl: './admin-quick-menu-actions.component.html',
  styleUrls: ['./admin-quick-menu-actions.component.scss'],
})
export class AdminQuickMenuActionsComponent {
  @Output() actionClickEvt = new EventEmitter<QuickMenuAction>();

  readonly menuActions: QuickMenuAction[] = [
    { icon: 'edit', label: 'menu-action-edit', type: ActionType.EDIT },
    { icon: 'delete', label: 'menu-action-delete', type: ActionType.DELETE },
  ];

  actionTypes = ActionType;

  onClick(action: QuickMenuAction) {
    this.actionClickEvt.emit(action);
  }
}
