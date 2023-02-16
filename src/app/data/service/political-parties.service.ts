import { environment } from './../../../environments/environment';
import { IPoliticianResponse } from './../schema/politician-response';
import { IPoliticalParty } from './../schema/political-party';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPartySidenavItem } from '../schema/party-sidenav-item';
import { Observable } from 'rxjs';
import { IPolitician } from '../schema/politician';

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

  createPoliticalParty(party: IPoliticalParty) {
    return this.http.post(`${environment.apiUrl}/political-parties/create`, party);
  }

  editPoliticalParty(party: IPoliticalParty): Observable<IPoliticalParty> {
    return this.http.put<IPoliticalParty>(`${environment.apiUrl}/political-parties/${party.id}`, party);
  }

  addPolitician(partyId: string, politician: IPolitician): Observable<IPoliticianResponse> {
    return this.http.post<IPoliticianResponse>(
      `${environment.apiUrl}/political-parties/${partyId}/politician`,
      politician
    );
  }
  //TODO Modify EP url
  editPolitician(partyId: string, request: IPolitician): Observable<IPoliticianResponse> {
    return this.http.put<IPoliticianResponse>(`${environment.apiUrl}/political-parties/${partyId}/politician`, request);
  }

  getPolitician(politicianId: string): Observable<IPolitician> {
    return this.http.get<IPolitician>(`${environment.apiUrl}/political-parties/politician/${politicianId}`);
  }

  removePolitician(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/political-parties/${id}`);
  }
}
