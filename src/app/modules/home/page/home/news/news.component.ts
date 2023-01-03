import { News } from './../../../../../data/schema/news';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  @Input() news: News;

  constructor(private router: Router) {}

  navigateToDetail(id: string): void {
    this.router.navigate([`/news/detail`], { queryParams: { id: id } });
  }
}
