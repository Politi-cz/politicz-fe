import { IPolitician } from './politician';
import { FormControl } from '@angular/forms';

export interface IPartyForm {
  name: FormControl<string>;
  image: FormControl<string>;
  tags: FormControl<string[]>;
  politicians: IPolitician[];
}
