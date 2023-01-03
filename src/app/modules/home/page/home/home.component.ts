import { Router } from '@angular/router';
import { News } from './../../../../data/schema/news';
import { NewsService } from './../../../../data/service/news.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  newsList: News[];

  constructor(private newsService: NewsService, private router: Router) {}

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews(): void {
    this.newsService.getAllNews().subscribe(news => (this.newsList = news));
  }
}
