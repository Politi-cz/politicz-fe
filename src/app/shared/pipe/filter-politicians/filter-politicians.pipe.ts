import { Store } from '@ngxs/store';
import { IPolitician } from '../../../data/schema/politician';
import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from '../../utils/utils';
import { Filters } from '../../../../app/action/filters.action';

@Pipe({
  name: 'filterPoliticians',
})
export class FilterPoliticiansPipe implements PipeTransform {
  constructor(private store: Store) {}

  public transform(politicians: IPolitician[], searchValue: string): IPolitician[] {
    if (!searchValue || politicians === null || politicians === undefined) {
      this.store.dispatch(new Filters.Set({ politicianFilterCount: politicians.length }));

      return politicians;
    }

    const filteredPoliticians = politicians.filter((politician) =>
      Utils.textIncludesSearchedValueCaseInsensitive(politician.fullname, searchValue),
    );

    this.store.dispatch(new Filters.Set({ politicianFilterCount: filteredPoliticians.length }));

    return filteredPoliticians;
  }
}
