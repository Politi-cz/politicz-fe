import { INews } from '../../../data/schema/news';

export namespace News {
  export class Remove {
    static readonly type = '[News] Remove';

    constructor(public payload: INews) {}
  }

  export class Get {
    static readonly type = '[News] Get';

    constructor(public id: string) {}
  }
}
