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
  //TODO refactor, return observable instead of subscribe
  constructor(private newsService: NewsService) {}

  @Action(News.GetAll) public getNews(ctx: StateContext<INews[]>): Observable<INews[]> {
    return this.newsService.getAllNews().pipe(tap((news: INews[]) => ctx.setState(news)));
  }

  @Action(News.Remove) public removeNews(
    ctx: StateContext<INews[]>,
    { payload }: News.Remove,
  ): Observable<void> {
    return this.newsService
      .deleteNews(payload.id)
      .pipe(
        tap(() => ctx.setState(ctx.getState().filter((news: INews) => news.id !== payload.id))),
      );
  }
}
