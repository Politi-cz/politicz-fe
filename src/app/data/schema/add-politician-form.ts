import { FormControl } from '@angular/forms';

export interface AddPoliticianForm {
  fullName: FormControl<string>;
  birthDate: FormControl<Date>;
  profileImageUrl: FormControl<string>;
  twitterUrl: FormControl<string | null>;
  facebookUrl: FormControl<string | null>;
  instagramUrl: FormControl<string | null>;
}
