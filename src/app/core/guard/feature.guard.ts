import { ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AuthenticationState } from '../state/authentication.state';
import { IAuthStateModel } from '../../data/schema/auth-state-model';
import { Injectable } from '@angular/core';
import { Utils } from '../../shared/utils/utils';

@Injectable()
export class FeatureGuard {
  constructor(private _store: Store, private _router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this._store.select(AuthenticationState).pipe(
      map((auth: IAuthStateModel) => {
        if (
          !!auth &&
          auth.isAuthorized &&
          Utils.checkPermission(auth.permissions, route.data['permission'])
        ) {
          return true;
        }

        return this._router.parseUrl('/news');
      }),
    );
  }
}
