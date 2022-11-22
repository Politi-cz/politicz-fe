import { IPolitician } from './../../../data/schema/politician';
import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from '../../utils/utils';

@Pipe({
  name: 'filterPoliticians',
})
export class FilterPoliticiansPipe implements PipeTransform {
  transform(politicians: IPolitician[], searchValue: string): IPolitician[] {
    if (!searchValue || politicians == null) {
      return politicians;
    }

    return politicians.filter(politician =>
      Utils.textIncludesSearchedValueCaseInsensitive(politician.fullName, searchValue)
    );
  }
}
