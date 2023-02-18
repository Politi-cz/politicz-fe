import { IPoliticianForm } from './politician-form';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

export interface IPoliticalPartyForm {
  name: FormControl<string>;
  image: FormControl<string>;
  tags: FormControl<string[]>;
  politicians?: FormArray<FormGroup<IPoliticianForm>>;
}
