import { News } from 'src/app/action/news.action';
import { NewsService } from './../../../../../data/service/news.service';
import { ActionType, QuickMenuAction } from './../../../../../data/schema/quick-menu-action';
import { INews } from './../../../../../data/schema/news';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  @Input() news: INews;

  constructor(private router: Router, private store: Store) {}

  navigateToDetail(id: string): void {
    this.router.navigate([`/news/detail`], { queryParams: { id: id } });
  }

  handleActionEvent(action: QuickMenuAction) {
    switch (action.type) {
      case ActionType.EDIT:
        alert('Zedituju tě more');
        break;
      case ActionType.DELETE:
        this.store.dispatch(new News.Remove(this.news));
        break;
    }
  }
}
