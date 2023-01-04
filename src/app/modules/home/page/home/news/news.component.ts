import { ActionType, QuickMenuAction } from './../../../../../data/schema/quick-menu-action';
import { News } from './../../../../../data/schema/news';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  @Input() news: News;

  readonly menuActions: QuickMenuAction[] = [
    { icon: 'edit', label: 'action_edit', type: ActionType.EDIT },
    { icon: 'delete', label: 'action_delete', type: ActionType.DELETE },
  ];

  constructor(private router: Router) {}

  navigateToDetail(id: string): void {
    this.router.navigate([`/news/detail`], { queryParams: { id: id } });
  }

  handleActionEvent(action: QuickMenuAction) {
    switch (action.type) {
      case ActionType.EDIT:
        alert('Zedituju tě more');
        break;
      case ActionType.DELETE:
        alert('DEAD');
        break;
    }
  }
}
