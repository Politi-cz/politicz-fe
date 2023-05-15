export namespace AuthenticationActions {
  export class Set {
    static readonly type = '[Authentication] Set authentication';
  }

  export class Login {
    static readonly type = '[Authentication] Login';
  }
  export class Logout {
    static readonly type = '[Authentication] Logout';
  }
}
