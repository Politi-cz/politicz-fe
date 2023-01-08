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
  constructor(private newsService: NewsService) {}

  @Action(News.GetAll) getNews(ctx: StateContext<INews[]>): void {
    this.newsService.getAllNews().subscribe(news => ctx.setState(news));
  }

  @Action(News.Remove) removeNews(ctx: StateContext<INews[]>, { payload }: News.Remove) {
    this.newsService
      .deleteNews(payload.id)
      .subscribe(() => ctx.setState(ctx.getState().filter(news => news.id !== payload.id)));
  }
}
