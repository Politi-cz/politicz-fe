import { Store } from '@ngxs/store';
import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from '../../utils/utils';
import { Filters } from '../../../../app/action/filters.action';
import { IPartySidenavItem } from './../../../data/schema/political-party';

@Pipe({
  name: 'filterParties',
})
export class FilterPartiesPipe implements PipeTransform {
  constructor(private store: Store) {}

  transform(parties: IPartySidenavItem[], searchValue: string): IPartySidenavItem[] {
    if (!searchValue || parties == null) {
      this.store.dispatch(new Filters.Set({ partyFilterCount: parties?.length ?? 1 }));
      return parties;
    }

    const filteredParties = parties.filter(party => {
      return (
        Utils.textIncludesSearchedValueCaseInsensitive(party.name, searchValue) ||
        Utils.arrayIncludesSearchedValueCaseInsensitive(party.tags, searchValue)
      );
    });

    this.store.dispatch(new Filters.Set({ partyFilterCount: filteredParties.length }));
    return filteredParties;
  }
}
