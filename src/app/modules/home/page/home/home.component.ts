import { NewsState } from '../../state/news.state';
import { Router } from '@angular/router';
import { INews } from './../../../../data/schema/news';
import { NewsService } from './../../../../data/service/news.service';
import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { News } from '../../action/news.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @Select(NewsState) newsList$: Observable<INews[]>;

  constructor(private newsService: NewsService, private router: Router, private store: Store) {}

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews(): void {
    this.store.dispatch(new News.GetAll());
  }
}
