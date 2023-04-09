import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Store} from '@ngxs/store';
import {AuthenticationState} from '../../state/authentication.state';
import {IAuthStateModel} from '../schema/auth-state-model';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  private accessToken: string;

  private isAuth: boolean;

  constructor(private _http: HttpClient, private _store: Store) {
    this._store.select(AuthenticationState).subscribe((authState: IAuthStateModel) => {
      this.accessToken = authState.accessToken;
      this.isAuth = authState.isAuthorized;
    });
  }

  public post<T>(url: string, body: any, addAccessToken: boolean = false): Observable<T> {
    const headers = addAccessToken ? this.headerWithAccessToken() : {};

    return this._http.post<T>(url, body, { headers });
  }

  public get<T>(url: string, addAccessToken: boolean = false): Observable<T> {
    const headers = addAccessToken ? this.headerWithAccessToken() : {};

    return this._http.get<T>(url, { headers });
  }

  public delete<T>(url: string, addAccessToken: boolean = false): Observable<T> {
    const headers = addAccessToken ? this.headerWithAccessToken() : {};

    return this._http.delete<T>(url, { headers });
  }

  public put<T>(url: string, body: any, addAccessToken: boolean = false): Observable<T> {
    const headers = addAccessToken ? this.headerWithAccessToken() : {};

    return this._http.put<T>(url, body, { headers });
  }

  private headerWithAccessToken(): any {
    if (!this.isAuth || !this.accessToken) {
      throw new Error('User is not authenticated, cannot add access token');
    }

    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.accessToken}`,
    };
  }
}
