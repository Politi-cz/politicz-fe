import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  private accessToken: string;

  private isAuth: boolean;

  constructor(private _http: HttpClient, private _auth: AuthService) {
    this._auth.isAuthenticated$.subscribe((result: boolean) => {
      this.isAuth = result;

      if (result) {
        this._auth
          .getAccessTokenSilently()
          .subscribe((token: string) => (this.accessToken = token));
      }
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
