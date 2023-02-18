import { FormControl } from '@angular/forms';

export interface IPolitician {
  id?: string;
  fullname: string;
  birthDate: Date;
  profileImageUrl: string;
  instagramUrl?: string;
  twitterUrl?: string;
  facebookUrl?: string;
}

export interface IPoliticianForm {
  fullname: FormControl<string>;
  birthDate: FormControl<Date | string>;
  profileImageUrl: FormControl<string>;
  facebookUrl: FormControl<string | null>;
  instagramUrl: FormControl<string | null>;
  twitterUrl: FormControl<string | null>;
}

export interface IPoliticianResponse {
  id: string;
  fullname: string;
  birthDate: Date;
  profileImageUrl: string;
  instagramUrl?: string;
  twitterUrl?: string;
  facebookUrl?: string;
}
