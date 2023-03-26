import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import dayjs from 'dayjs';

export function politicianAgeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const politicianBirthDate = new Date(control.value);
    const age = dayjs(new Date().setHours(0, 0, 0, 0)).diff(politicianBirthDate, 'year', true);

    //In the Czech Republic, a politician must be at least 21 years old to be a politician.
    return age >= 21 ? null : { bellowMinimumAge: true };
  };
}
