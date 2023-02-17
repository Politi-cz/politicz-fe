import { IPolitician } from './politician';
import { FormControl } from '@angular/forms';

export interface IPartyForm {
  name: FormControl<string | null>;
  image: FormControl<string>;
  tags: FormControl<string[]>;
  politicians: IPolitician[];
}
