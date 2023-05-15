import { Store } from '@ngxs/store';
import { IPolitician } from '../../../data/schema/politician';
import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from '../../utils/utils';
import { Filters } from '../../../core/action/filters.action';

@Pipe({
  name: 'filterPoliticians',
})
export class FilterPoliticiansPipe implements PipeTransform {
  constructor(private _store: Store) {}

  public transform(politicians: IPolitician[], searchValue: string): IPolitician[] {
    if (!searchValue || politicians === null || politicians === undefined) {
      this._store.dispatch(new Filters.Set({ politicianFilterCount: politicians!.length }));

      return politicians;
    }

    const filteredPoliticians = politicians.filter((politician: IPolitician) =>
      Utils.textIncludesSearchedValueCaseInsensitive(politician.fullName, searchValue),
    );

    this._store.dispatch(new Filters.Set({ politicianFilterCount: filteredPoliticians.length }));

    return filteredPoliticians;
  }
}
