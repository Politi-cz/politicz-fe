import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { INews, NewsRequest } from '../schema/news';
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private _http: HttpClient, private _httpRequest: HttpRequestService) {}

  public getAllNews(): Observable<INews[]> {
    return this._httpRequest.get<INews[]>(`${environment.apiNews}/news`);
  }

  public getNewsById(id: string): Observable<INews> {
    return this._httpRequest.get<INews>(`${environment.apiNews}/news/${id}`);
  }

  public deleteNews(id: string): Observable<void> {
    return this._httpRequest.delete<void>(`${environment.apiNews}/news/${id}`, true);
  }

  public addNews(newsRequest: NewsRequest): Observable<INews> {
    return this._httpRequest.post<INews>(`${environment.apiNews}/news/create`, newsRequest, true);
  }

  public updateNews(newsRequest: NewsRequest, id: string): Observable<INews> {
    return this._httpRequest.put<INews>(`${environment.apiNews}/news/` + id, newsRequest, true);
  }
}
