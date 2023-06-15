import { INews, INewsState } from '../../../data/schema/news';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { News } from '../action/news.action';
import { NewsStateDefaultData } from '../../../../assets/news-mock-data';
import { NotificationService } from '../../../shared/service/notification.service';
import { Router } from '@angular/router';
import { Utils } from '../../../shared/utils/utils';

@State<INewsState>({
  name: 'newsState',
  defaults: NewsStateDefaultData,
})
@Injectable()
export class NewsState {
  constructor(private _notification: NotificationService, private _router: Router) {}

  @Selector()
  public static getSelectedNews(state: INewsState): INews | undefined {
    return state.selectedNews;
  }

  @Selector()
  public static getNews(state: INewsState): INews[] {
    return state.news;
  }

  @Action(News.GetNewsById)
  public getNewsById(ctx: StateContext<INewsState>, { id }: News.GetNewsById): void {
    const selectedNews = ctx.getState().news.find((news: INews) => news.id === id);

    if (!selectedNews) {
      this._notification.showError('No news with id ' + id);
      this._router.navigate(['/']);

      return;
    }

    ctx.patchState({ selectedNews });
  }

  @Action(News.Remove)
  public removeNews(ctx: StateContext<INewsState>, { payload }: News.Remove): void {
    ctx.patchState({ news: ctx.getState().news.filter((news: INews) => news.id !== payload.id) });
    this._notification.showSuccess('news-remove-success');
  }

  @Action(News.Add)
  public add(ctx: StateContext<INewsState>, { payload }: News.Add): void {
    const newNews: INews = {
      ...payload,
      id: Utils.generateGuid(),
      publishDate: new Date(),
    };

    this._notification.showSuccess('news-add-success');

    ctx.patchState({ news: [...ctx.getState().news, newNews] });
  }

  @Action(News.Update)
  public update(ctx: StateContext<INewsState>, { payload, id }: News.Update): void {
    const newsIndex = ctx.getState().news.findIndex((news: INews) => news.id === id);
    const news = ctx.getState().news;

    if (newsIndex === -1) {
      this._notification.showError('No news with index');

      return;
    }

    news[newsIndex] = { ...news[newsIndex], ...payload };

    this._notification.showSuccess('news-update-success');

    ctx.patchState({ news: news });
  }
}
