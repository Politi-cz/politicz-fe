import { FormControl } from '@angular/forms';

export interface IPolitician {
  id?: string;
  fullName: string;
  birthDate: Date;
  profileImageUrl: string;
  instagramUrl?: string;
  twitterUrl?: string;
  facebookUrl?: string;
}

export interface IPoliticianForm {
  fullName: FormControl<string>;
  birthDate: FormControl<Date | string>;
  profileImageUrl: FormControl<string>;
  facebookUrl: FormControl<string | null>;
  instagramUrl: FormControl<string | null>;
  twitterUrl: FormControl<string | null>;
}

export interface IPoliticianResponse {
  id: string;
  fullName: string;
  birthDate: Date;
  profileImageUrl: string;
  instagramUrl?: string;
  twitterUrl?: string;
  facebookUrl?: string;
}
