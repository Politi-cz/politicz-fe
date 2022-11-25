import { IFiltersCount } from '../data/schema/filters-count';

export namespace Filters {
  export class Set {
    static readonly type = '[Filters] Set filters count';

    constructor(public payload: IFiltersCount) {}
  }
}
