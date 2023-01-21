import { FormControl } from '@angular/forms';

export interface AddPoliticianForm {
  name: FormControl<string>;
  birthDate: FormControl<string>;
  profileImageUrl: FormControl<string>;
  twitterUrl: FormControl<string | null>;
  facebookUrl: FormControl<string | null>;
  instagramUrl: FormControl<string | null>;
}
