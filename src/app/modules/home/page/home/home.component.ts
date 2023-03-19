import { NewsState } from '../../state/news.state';
import { INews } from '../../../../data/schema/news';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Select(NewsState.getNews) newsList$: Observable<INews[]>;
}
