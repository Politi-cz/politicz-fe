import { News } from './../../../../../data/schema/news';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  @Input() news: News;

  constructor() {}
}
