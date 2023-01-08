import { IPoliticalParty } from './../schema/political-party';
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

  getPoliticalParty(id: string | null): Observable<IPoliticalParty> {
    if (!id) {
      throw new Error('invalid political party ID');
    }

    return this.http.get<IPoliticalParty>(`${environment.apiUrl}/political-parties/${id}`);
  }

  removePolitician(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/political-parties/${id}`);
  }
}
