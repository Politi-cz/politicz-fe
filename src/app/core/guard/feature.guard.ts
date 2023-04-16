import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AuthenticationState } from '../../state/authentication.state';
import { IAuthStateModel } from '../../data/schema/auth-state-model';
import { Injectable } from '@angular/core';
import { Utils } from '../../shared/utils/utils';

// TODO Do in new way, function auth guard
@Injectable()
// There is way to use functional guard, but I haven't found how to get custom data passed in route. Until then, I will use class guard even though CanActivate is deprecated
export class FeatureGuard implements CanActivate {
  constructor(private store: Store, private router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(AuthenticationState).pipe(
      map((auth: IAuthStateModel) => {
        if (
          !!auth &&
          auth.isAuthorized &&
          Utils.checkPermission(auth.permissions, route.data['permission'])
        ) {
          return true;
        }

        return this.router.parseUrl('/news');
      }),
    );
  }
}
