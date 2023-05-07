import { INews } from '../../../../../data/schema/news';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { News } from '../../../action/news.action';
import { NewsState } from '../../../state/news.state';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss'],
})
export class NewsDetailComponent implements OnInit {
  @Select(NewsState.getSelectedNews) newsDetail$: Observable<INews>;

  constructor(private _route: ActivatedRoute, private _store: Store) {}

  public ngOnInit(): void {
    this._route.paramMap.subscribe((params: ParamMap) =>
      this._store.dispatch(new News.Get(params.get('id')!)),
    );
  }
}
