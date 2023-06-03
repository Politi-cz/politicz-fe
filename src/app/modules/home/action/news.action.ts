import { INews, NewsRequest } from '../../../data/schema/news';

export namespace News {
  export class GetAll {
    static readonly type = '[News] GetAll';
  }

  export class Remove {
    static readonly type = '[News] Remove';

    constructor(public payload: INews) {}
  }

  export class Add {
    static readonly type = '[News] Add';

    constructor(public payload: NewsRequest) {}
  }

  export class Update {
    static readonly type = '[News] Update';

    constructor(public payload: NewsRequest, public id: string) {}
  }

  export class GetNewsById {
    static readonly type = '[News] getById';

    constructor(public id: string) {}
  }
}
