import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { News } from '../../../action/news.action';
import { NewsState } from '../../../state/news.state';
import { Observable } from 'rxjs';
import { INews, NewsRequest } from '../../../../../data/schema/news';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.scss'],
})
export class EditNewsComponent implements OnInit {
  @Select(NewsState.selectedNews) news$: Observable<INews>;

  constructor(private _route: ActivatedRoute, private _store: Store, private _router: Router) {}

  public ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) => {
      if (params.has('id')) {
        const id = params.get('id');

        this._store.dispatch(new News.GetNewsById(id!));
      }
    });
  }

  public navigateBack(): void {
    this._router.navigate(['/news']);
  }

  public updateNews(newsRequest: NewsRequest): void {
    const selectedNews = this._store.selectSnapshot(NewsState.selectedNews);

    if (selectedNews?.id) {
      this._store
        .dispatch(new News.Update(newsRequest, selectedNews.id))
        .subscribe(() => this.navigateBack());
    }
  }
}
