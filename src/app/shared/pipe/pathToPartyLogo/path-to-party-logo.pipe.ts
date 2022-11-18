import { Pipe, PipeTransform } from '@angular/core';
import { Image } from '../../../data/schema/image';
import { environment } from '../../../../environments/environment';

@Pipe({
  name: 'pathToPartyLogo',
})
export class PathToPartyLogoPipe implements PipeTransform {
  transform(value: Image): unknown {
    return environment.assetsPartyLogosPath + value.name + '.' + value.extension;
  }
}
