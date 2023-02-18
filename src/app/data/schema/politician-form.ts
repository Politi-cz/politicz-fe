import { FormControl } from '@angular/forms';

export interface IPoliticianForm {
  fullname: FormControl<string>;
  birthDate: FormControl<Date | string>;
  profileImageUrl: FormControl<string>;
  facebookUrl: FormControl<string | null>;
  instagramUrl: FormControl<string | null>;
  twitterUrl: FormControl<string | null>;
}
