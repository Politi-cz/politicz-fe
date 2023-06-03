import { Observable, tap } from 'rxjs';
import { NewsService } from '../../../data/service/news.service';
import { INews, INewsState } from '../../../data/schema/news';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { News } from '../action/news.action';
import { NotificationService } from '../../../shared/service/notification.service';

@State<INewsState>({
  name: 'newsState',
  defaults: {
    news: [],
  },
})
@Injectable()
export class NewsState {
  constructor(private _newsService: NewsService, private _notification: NotificationService) {}

  @Selector() public static allNews(state: INewsState): INews[] {
    return state.news;
  }

  @Selector() public static selectedNews(state: INewsState): INews | undefined {
    return state.selectedNews;
  }

  @Action(News.GetAll) public getNews(ctx: StateContext<INewsState>): Observable<INews[]> {
    return this._newsService
      .getAllNews()
      .pipe(tap((news: INews[]) => ctx.patchState({ ...ctx.getState(), news })));
  }

  @Action(News.GetNewsById) public getNewsById(
    ctx: StateContext<INewsState>,
    { id }: News.GetNewsById,
  ): Observable<INews> {
    return this._newsService
      .getNewsById(id)
      .pipe(tap((news: INews) => ctx.patchState({ selectedNews: news })));
  }

  @Action(News.Remove) public removeNews(
    ctx: StateContext<INewsState>,
    { payload }: News.Remove,
  ): Observable<void> {
    return this._newsService.deleteNews(payload.id).pipe(
      tap(() => {
        ctx.patchState({
          news: ctx.getState().news.filter((news: INews) => news.id !== payload.id),
        });
        this._notification.showSuccess('news-remove-success');
      }),
    );
  }

  @Action(News.Add) public add(
    ctx: StateContext<INewsState>,
    { payload }: News.Add,
  ): Observable<INews> {
    return this._newsService
      .addNews(payload)
      .pipe(tap(() => this._notification.showSuccess('news-add-success')));
  }

  @Action(News.Update) public update(
    ctx: StateContext<INewsState>,
    { payload, id }: News.Update,
  ): Observable<INews> {
    return this._newsService.updateNews(payload, id).pipe(
      tap((news: INews) => {
        ctx.patchState({ selectedNews: news });
        this._notification.showSuccess('news-update-success');
      }),
    );
  }
}
