import { Inject, Injectable } from '@angular/core';
import { Action, createSelector, Selector, State, StateContext } from '@ngxs/store';
import { IAuthStateModel } from '../../data/schema/auth-state-model';
import { AuthenticationActions } from '../action/authentication.action';
import { AuthService, User } from '@auth0/auth0-angular';
import { IAuth0DetailedResponse } from '../../data/schema/auth0-detailed-response';
import { DOCUMENT } from '@angular/common';
import jwtDecode from 'jwt-decode';
import { IJwtDecoded } from '../../data/schema/jwt-decoded';
import { Permission } from '../../data/schema/permission.enum';

@State<IAuthStateModel>({
  name: 'AuthenticationState',
})
@Injectable()
export class AuthenticationState {
  constructor(@Inject(DOCUMENT) public document: Document, private _auth: AuthService) {}

  @Selector()
  public static accessToken(state: IAuthStateModel): string {
    return state.accessToken;
  }

  @Selector()
  public static idToken(state: IAuthStateModel): string {
    return state.idToken;
  }

  @Selector()
  public static user(state: IAuthStateModel): User {
    return state.user;
  }

  @Selector()
  public static isAuthorized(state: IAuthStateModel): boolean {
    return state.isAuthorized;
  }

  @Selector()
  public static permissions(state: IAuthStateModel): string[] | undefined {
    return state?.isAuthorized ? state.permissions : undefined;
  }

  public static hasPermission(permission: Permission): (state: IAuthStateModel) => boolean {
    return createSelector([AuthenticationState], (state: IAuthStateModel) => {
      return state.permissions.includes(permission);
    });
  }

  @Action(AuthenticationActions.Set)
  public setAuthentication(ctx: StateContext<IAuthStateModel>): void {
    this._auth.isAuthenticated$.subscribe((isAuth: boolean) => {
      if (isAuth) {
        this._auth
          .getAccessTokenSilently({ detailedResponse: true })
          .subscribe((tokenData: IAuth0DetailedResponse) => {
            const decodedToken = jwtDecode(tokenData.access_token) as IJwtDecoded;
            ctx.patchState({
              accessToken: tokenData.access_token,
              idToken: tokenData.id_token,
              isAuthorized: isAuth,
              permissions: [...decodedToken.permissions],
            });
          });
        this._auth.user$.subscribe((user: any) => {
          ctx.patchState({ user: user });
        });
      } else {
        ctx.setState({
          accessToken: '',
          isAuthorized: false,
          idToken: '',
          user: {},
          permissions: [],
        });
      }
    });
  }

  @Action(AuthenticationActions.Login)
  public login(): void {
    this._auth.loginWithRedirect();
  }

  @Action(AuthenticationActions.Logout)
  public logout(ctx: StateContext<IAuthStateModel>): void {
    ctx.setState({
      accessToken: '',
      isAuthorized: false,
      idToken: '',
      user: {},
      permissions: [],
    });

    this._auth.logout({ logoutParams: { returnTo: this.document.location.origin } });
  }
}
