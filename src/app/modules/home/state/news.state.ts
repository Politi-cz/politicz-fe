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

  @Action(News.GetAll) public getNews(ctx: StateContext<INews[]>): void {
    this.newsService.getAllNews().subscribe((news: INews[]) => ctx.setState(news));
  }

  @Action(News.Remove) public removeNews(
    ctx: StateContext<INews[]>,
    { payload }: News.Remove,
  ): void {
    this.newsService
      .deleteNews(payload.id)
      .subscribe(() =>
        ctx.setState(ctx.getState().filter((news: INews) => news.id !== payload.id)),
      );
  }
}
