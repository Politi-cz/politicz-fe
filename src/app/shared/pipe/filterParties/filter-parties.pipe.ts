import { IPartySidenavItem } from './../../../data/schema/party-sidenav-item';
import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from '../../utils/utils';

@Pipe({
  name: 'filterParties',
})
export class FilterPartiesPipe implements PipeTransform {
  transform(parties: IPartySidenavItem[], searchValue: string): IPartySidenavItem[] {
    if (!searchValue || parties == null) {
      return parties;
    }

    return parties.filter(party => {
      return (
        Utils.textIncludesSearchedValueCaseInsensitive(party.name, searchValue) ||
        Utils.arrayIncludesSearchedValueCaseInsensitive(party.tags, searchValue)
      );
    });
  }
}
