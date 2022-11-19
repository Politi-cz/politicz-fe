export namespace Spinner {
  export class Set {
    static readonly type = '[Spinner] Set spinner';

    constructor(public payload: boolean) {}
  }
}
