import { INews } from './../data/schema/news';
export namespace News {
  export class GetAll {
    static readonly type = '[News] GetAll';
  }

  export class Remove {
    static readonly type = '[News] Remove';

    constructor(public payload: INews) {}
  }
}
