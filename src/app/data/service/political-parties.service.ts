import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPartySidenavItem } from '../schema/party-sidenav-item';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PoliticalPartiesService {
  constructor(private http: HttpClient) {}

  getPartiesForSidenav(): Observable<IPartySidenavItem[]> {
    return this.http.get<IPartySidenavItem[]>(`${environment.apiUrl}/political-parties`);
  }
}
