import { FormControl } from '@angular/forms';

export interface AddPoliticianForm {
  fullName: FormControl<string | undefined>;
  birthDate: FormControl<Date | undefined>;
  profileImageUrl: FormControl<string | undefined>;
  twitterUrl: FormControl<string | null>;
  facebookUrl: FormControl<string | null>;
  instagramUrl: FormControl<string | null>;
}
