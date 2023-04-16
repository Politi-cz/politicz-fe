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
import { HttpRequestService } from './http-request.service';

@Injectable({
  providedIn: 'root',
})
export class PoliticalPartiesService {
  constructor(private http: HttpClient, private _httpRequest: HttpRequestService) {}

  public getPartiesForSidenav(): Observable<IPartySidenavItem[]> {
    return this._httpRequest.get(`${environment.apiUrl}/political-parties`);
  }

  public getPoliticalParty(id: string | null): Observable<IPoliticalParty> {
    if (!id) {
      throw new Error('invalid political party ID');
    }

    return this._httpRequest.get(`${environment.apiUrl}/political-parties/${id}`);
  }

  public createPoliticalParty(party: IPoliticalParty): Observable<ICreatePoliticalPartyResponse> {
    return this._httpRequest.post(`${environment.apiUrl}/political-parties/create`, party, true);
  }

  public removePoliticalParty(id: string): Observable<void> {
    return this._httpRequest.delete(`${environment.apiUrl}/political-parties/${id}`, true);
  }

  public editPoliticalParty(
    party: IPoliticalPartyPoliticiansFree,
  ): Observable<IPoliticalPartyPoliticiansFree> {
    return this._httpRequest.put(
      `${environment.apiUrl}/political-parties/${party.id}`,
      { ...party, politicians: [] },
      true,
    );
  }

  public addPolitician(partyId: string, politician: IPolitician): Observable<IPoliticianResponse> {
    return this._httpRequest.post(
      `${environment.apiUrl}/political-parties/${partyId}/politician`,
      politician,
      true,
    );
  }

  public editPolitician(
    politicianId: string,
    request: IPolitician,
  ): Observable<IPoliticianResponse> {
    return this._httpRequest.put(
      `${environment.apiUrl}/political-parties/politician/${politicianId}`,
      request,
      true,
    );
  }

  public getPolitician(politicianId: string): Observable<IPolitician> {
    return this._httpRequest.get(
      `${environment.apiUrl}/political-parties/politician/${politicianId}`,
    );
  }

  public removePolitician(id: string): Observable<void> {
    return this._httpRequest.delete(
      `${environment.apiUrl}/political-parties/politician/${id}`,
      true,
    );
  }
}
