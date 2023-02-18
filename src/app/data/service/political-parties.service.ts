import { environment } from './../../../environments/environment';
import { IPoliticianResponse } from '../schema/politician';
import {
  ICreatePoliticalPartyResponse,
  IPoliticalParty,
  IPoliticalPartyPolticiansFree,
} from './../schema/political-party';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPartySidenavItem } from './../schema/political-party';
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

  createPoliticalParty(party: IPoliticalParty): Observable<ICreatePoliticalPartyResponse> {
    return this.http.post<ICreatePoliticalPartyResponse>(`${environment.apiUrl}/political-parties/create`, party);
  }

  editPoliticalParty(party: IPoliticalPartyPolticiansFree): Observable<IPoliticalPartyPolticiansFree> {
    return this.http.put<IPoliticalPartyPolticiansFree>(`${environment.apiUrl}/political-parties/${party.id}`, party);
  }

  addPolitician(partyId: string, politician: IPolitician): Observable<IPoliticianResponse> {
    return this.http.post<IPoliticianResponse>(
      `${environment.apiUrl}/political-parties/${partyId}/politician`,
      politician
    );
  }

  editPolitician(politicianId: string, request: IPolitician): Observable<IPoliticianResponse> {
    return this.http.put<IPoliticianResponse>(
      `${environment.apiUrl}/political-parties/politician/${politicianId}`,
      request
    );
  }

  getPolitician(politicianId: string): Observable<IPolitician> {
    return this.http.get<IPolitician>(`${environment.apiUrl}/political-parties/politician/${politicianId}`);
  }

  removePolitician(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/political-parties/${id}`);
  }
}
