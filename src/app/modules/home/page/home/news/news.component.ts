import { ActionType, QuickMenuAction } from '../../../../../data/schema/quick-menu-action';
import { INews } from '../../../../../data/schema/news';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { News } from '../../../action/news.action';
import { Utils } from '../../../../../shared/utils/utils';
import { AuthenticationState } from '../../../../../core/state/authentication.state';
import { Permission } from '../../../../../data/schema/permission.enum';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../../../shared/component/confirm-dialog/confirm-dialog.component';
import { IConfirmDialogData } from '../../../../../data/schema/dialog';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  @Input({ required: true }) news: INews;

  @Select(AuthenticationState.hasPermission(Permission.ModifyNews))
  hasPermission$: Observable<boolean>;

  public readonly dateTimeFormat = Utils.DATE_TIME_FORMAT;

  constructor(private _router: Router, private _store: Store, private _dialog: MatDialog) {}

  public navigateToDetail(id: string): void {
    this._router.navigate(['/news/detail', id]);
  }

  public handleActionEvent(action: QuickMenuAction): void {
    switch (action.type) {
      case ActionType.EDIT:
        this._router.navigate(['/news/edit/' + this.news.id]);
        break;
      case ActionType.DELETE:
        this.deleteNews();
        break;
    }
  }

  private deleteNews(): void {
    const data: IConfirmDialogData = {
      title: 'dialog-remove',
      content: 'news-delete-content',
      closeButtonText: 'dialog-action-cancel',
      confirmButtonText: 'news-delete',
    };
    const ref = this._dialog.open(ConfirmDialogComponent, {
      data,
    });
    ref.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this._store.dispatch(new News.Remove(this.news));
      }
    });
  }
}
