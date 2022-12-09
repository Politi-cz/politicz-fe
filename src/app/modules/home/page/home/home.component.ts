import { News } from './../../../../data/schema/news';
import { NewsService } from './../../../../data/service/news.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  newsList: News[];

  constructor(private news: NewsService) {}

  ngOnInit(): void {}
}
