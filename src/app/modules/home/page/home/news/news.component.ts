import { ActionType, QuickMenuAction } from '../../../../../data/schema/quick-menu-action';
import { INews } from '../../../../../data/schema/news';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { News } from '../../../action/news.action';
import { Utils } from '../../../../../shared/utils/utils';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  @Input() news: INews;

  public readonly dateTimeFormat = Utils.DATE_TIME_FORMAT;

  constructor(private _router: Router, private _store: Store) {}

  public navigateToDetail(id: string): void {
    this._router.navigate(['/news/detail', id]);
  }

  public handleActionEvent(action: QuickMenuAction): void {
    switch (action.type) {
      case ActionType.EDIT:
        alert('Zedituju tě more');
        break;
      case ActionType.DELETE:
        this._store.dispatch(new News.Remove(this.news));
        break;
    }
  }
}
