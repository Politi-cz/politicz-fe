import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { INews } from '../schema/news';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  public getAllNews(): Observable<INews[]> {
    return this.http.get<INews[]>(`${environment.apiUrl}/news`);
  }

  public getNewsById(id: string): Observable<INews> {
    return this.http.get<INews>(`${environment.apiUrl}/news/${id}`);
  }

  public deleteNews(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/news/${id}`);
  }
}
