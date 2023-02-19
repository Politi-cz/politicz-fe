import { NewsState } from '../../state/news.state';
import { INews } from './../../../../data/schema/news';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { News } from '../../action/news.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Select(NewsState) newsList$: Observable<INews[]>;

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.getAllNews();
  }

  public getAllNews(): void {
    this.store.dispatch(new News.GetAll());
  }
}
