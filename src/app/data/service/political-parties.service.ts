import { environment } from '../../../environments/environment';
import { IPoliticianResponse } from '../schema/politician';
import {
  ICreatePoliticalPartyResponse,
  IPoliticalParty,
  IPoliticalPartyPoliticiansFree,
} from '../schema/political-party';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPartySidenavItem } from '../schema/political-party';
import { Observable } from 'rxjs';
import { IPolitician } from '../schema/politician';

@Injectable({
  providedIn: 'root',
})
export class PoliticalPartiesService {
  constructor(private http: HttpClient) {}

  public getPartiesForSidenav(): Observable<IPartySidenavItem[]> {
    return this.http.get<IPartySidenavItem[]>(`${environment.apiUrl}/political-parties`);
  }

  public getPoliticalParty(id: string | null): Observable<IPoliticalParty> {
    if (!id) {
      throw new Error('invalid political party ID');
    }

    return this.http.get<IPoliticalParty>(`${environment.apiUrl}/political-parties/${id}`);
  }

  public createPoliticalParty(party: IPoliticalParty): Observable<ICreatePoliticalPartyResponse> {
    return this.http.post<ICreatePoliticalPartyResponse>(
      `${environment.apiUrl}/political-parties/create`,
      party,
    );
  }

  public removePoliticalParty(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/political-parties/${id}`);
  }

  public editPoliticalParty(
    party: IPoliticalPartyPoliticiansFree,
  ): Observable<IPoliticalPartyPoliticiansFree> {
    return this.http.put<IPoliticalPartyPoliticiansFree>(
      `${environment.apiUrl}/political-parties/${party.id}`,
      party,
    );
  }

  public addPolitician(partyId: string, politician: IPolitician): Observable<IPoliticianResponse> {
    return this.http.post<IPoliticianResponse>(
      `${environment.apiUrl}/political-parties/${partyId}/politician`,
      politician,
    );
  }

  public editPolitician(
    politicianId: string,
    request: IPolitician,
  ): Observable<IPoliticianResponse> {
    return this.http.put<IPoliticianResponse>(
      `${environment.apiUrl}/political-parties/politician/${politicianId}`,
      request,
    );
  }

  public getPolitician(politicianId: string): Observable<IPolitician> {
    return this.http.get<IPolitician>(
      `${environment.apiUrl}/political-parties/politician/${politicianId}`,
    );
  }

  public removePolitician(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/political-parties/${id}`);
  }
}
