import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { News } from '../../../action/news.action';
import { NewsState } from '../../../state/news.state';
import { Observable } from 'rxjs';
import { INews, NewsRequest } from '../../../../../data/schema/news';
import { NotificationService } from '../../../../../shared/service/notification.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss'],
})
export class EditNewsComponent implements OnInit {
  @Select(NewsState.getSelectedNews) news$: Observable<INews>;

  constructor(
    private _route: ActivatedRoute,
    private _store: Store,
    private _router: Router,
    private _notification: NotificationService,
  ) {}

  public ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');

      if (id) {
        this._store.dispatch(new News.GetNewsById(id));
      } else {
        this._router.navigate(['/']);
        this._notification.showError('No news ID provided');
      }
    });
  }

  public navigateBack(): void {
    this._router.navigate(['/news']);
  }

  public updateNews(newsRequest: NewsRequest): void {
    const selectedNews = this._store.selectSnapshot(NewsState.getSelectedNews);

    if (selectedNews?.id) {
      this._store
        .dispatch(new News.Update(newsRequest, selectedNews.id))
        .subscribe(() => this.navigateBack());
    }
  }
}
