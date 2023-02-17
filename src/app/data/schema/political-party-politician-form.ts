import { FormControl } from '@angular/forms';
export interface IPoliticalPartyPolitician {
  fullname: FormControl<string>;
  birthDate: FormControl<string>;
  profileImageUrl: FormControl<string>;
  facebookUrl: FormControl<string | null>;
  instagramUrl: FormControl<string | null>;
  twitterUrl: FormControl<string | null>;
}
