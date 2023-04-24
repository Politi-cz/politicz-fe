import { NewsService } from '../../../../../data/service/news.service';
import { INews } from '../../../../../data/schema/news';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
})
export class NewsDetailComponent implements OnInit {
  newsDetail$: Observable<INews>;

  constructor(private _route: ActivatedRoute, private _newsService: NewsService) {}

  public ngOnInit(): void {
    this.newsDetail$ = this._route.queryParamMap.pipe(
      switchMap((params: ParamMap) => this._newsService.getNewsById(params.get('id')!)),
    );
  }
}
