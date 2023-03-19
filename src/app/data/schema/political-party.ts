import { FormControl, FormArray, FormGroup } from '@angular/forms';
import { IPolitician, IPoliticianForm } from './politician';

export interface IPoliticalParty {
  id?: string;
  name: string;
  tags: string[];
  imageUrl: string;
  politicians: IPolitician[];
}

export interface IPoliticalPartyState {
  selectedParty: IPoliticalParty;
  parties: IPoliticalParty[];
}

export interface IPoliticalPartyPoliticiansFree {
  id?: string;
  name: string;
  tags: string[];
  imageUrl: string;
}

export interface IPoliticalPartyForm {
  name: FormControl<string>;
  imageUrl: FormControl<string>;
  tags: FormControl<string[]>;
  politicians?: FormArray<FormGroup<IPoliticianForm>>;
}

export interface IPartySidenavItem {
  id: string;
  name: string;
  tags: string[];
  imageUrl: string;
}

export interface ICreatePoliticalPartyResponse {
  id: string;
  name: string;
  tags: string[];
  imageUrl: string;
  politicians: IPolitician[];
}
