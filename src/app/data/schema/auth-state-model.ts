import {User} from '@auth0/auth0-angular';

export interface IAuthStateModel {
  accessToken: string;
  idToken: string;
  isAuthorized: boolean;
  user: User;
}
