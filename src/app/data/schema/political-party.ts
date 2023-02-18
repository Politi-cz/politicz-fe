import { FormControl, FormArray, FormGroup } from '@angular/forms';
import { IPolitician, IPoliticianForm } from './politician';

export interface IPoliticalParty {
  id?: string;
  name: string;
  tags: string[];
  image: string;
  politicians: IPolitician[];
}

export interface IPoliticalPartyPolticiansFree {
  id?: string;
  name: string;
  tags: string[];
  image: string;
}

export interface IPoliticalPartyForm {
  name: FormControl<string>;
  image: FormControl<string>;
  tags: FormControl<string[]>;
  politicians?: FormArray<FormGroup<IPoliticianForm>>;
}

export interface IPartySidenavItem {
  id: string;
  name: string;
  tags: string[];
  image: string;
}

export interface ICreatePoliticalPartyResponse {
  id: string;
  name: string;
  tags: string[];
  image: string;
  politicians: IPolitician[];
}
