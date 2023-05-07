import { INews, INewsState } from '../../../data/schema/news';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { News } from '../action/news.action';
import { NewsStateDefaultData } from '../../../../assets/news-mock-data';
import { NotificationService } from '../../../shared/service/notification.service';

@State<INewsState>({
  name: 'newsState',
  defaults: NewsStateDefaultData,
})
@Injectable()
export class NewsState {
  constructor(private _notificationService: NotificationService) {}

  @Selector()
  public static getSelectedNews(state: INewsState): INews {
    return state.selectedNews;
  }

  @Selector()
  public static getNews(state: INewsState): INews[] {
    return state.news;
  }

  @Action(News.Get)
  public getNews(ctx: StateContext<INewsState>, { id }: News.Get): void {
    const selectedNews = ctx.getState().news.find((news: INews) => news.id === id);

    if (selectedNews) {
      ctx.patchState({ selectedNews: selectedNews });
    }
  }

  @Action(News.Remove)
  public removeNews(ctx: StateContext<INewsState>, { payload }: News.Remove): void {
    ctx.patchState({
      news: ctx.getState().news.filter((news: INews) => news.id !== payload.id),
    });
    this._notificationService.showSuccess('news-deleted');
  }
}
