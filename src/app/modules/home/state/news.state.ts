import { tap, Observable } from 'rxjs';
import { NewsService } from '../../../data/service/news.service';
import { INews } from '../../../data/schema/news';
import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { News } from '../action/news.action';

@State<INews[]>({
  name: 'newsState',
  defaults: [],
})
@Injectable()
export class NewsState {
  constructor(private _newsService: NewsService) {}

  @Action(News.GetAll) public getNews(ctx: StateContext<INews[]>): Observable<INews[]> {
    return this._newsService.getAllNews().pipe(tap((news: INews[]) => ctx.setState(news)));
  }

  @Action(News.Remove) public removeNews(
    ctx: StateContext<INews[]>,
    { payload }: News.Remove,
  ): Observable<void> {
    return this._newsService
      .deleteNews(payload.id)
      .pipe(
        tap(() => ctx.setState(ctx.getState().filter((news: INews) => news.id !== payload.id))),
      );
  }
}
