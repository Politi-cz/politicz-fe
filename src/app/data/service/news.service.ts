import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { News } from '../schema/news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getAllNews(): Observable<News[]> {
    return this.http.get<News[]>(`${environment.apiUrl}/news`);
  }

  getNewsById(id: string): Observable<News> {
    return this.http.get<News>(`${environment.apiUrl}/news/` + id);
  }
}
