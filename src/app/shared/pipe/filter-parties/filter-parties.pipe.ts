import { Store } from '@ngxs/store';
import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from '../../utils/utils';
import { Filters } from '../../../action/filters.action';
import { IPoliticalParty } from '../../../data/schema/political-party';

@Pipe({
  name: 'filterParties',
})
export class FilterPartiesPipe implements PipeTransform {
  constructor(private store: Store) {}

  public transform(parties: IPoliticalParty[], searchValue: string): IPoliticalParty[] {
    if (!searchValue || parties === null || parties === undefined) {
      this.store.dispatch(new Filters.Set({ partyFilterCount: parties?.length ?? 1 }));

      return parties;
    }

    const filteredParties = parties.filter((party: IPoliticalParty) => {
      return (
        Utils.textIncludesSearchedValueCaseInsensitive(party.name, searchValue) ||
        Utils.arrayIncludesSearchedValueCaseInsensitive(party.tags, searchValue)
      );
    });

    this.store.dispatch(new Filters.Set({ partyFilterCount: filteredParties.length }));

    return filteredParties;
  }
}
