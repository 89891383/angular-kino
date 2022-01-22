import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appFilmDurationValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: FilmDurationValidatorDirective,
      multi: true,
    },
  ],
})
export class FilmDurationValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    if (
      control.value !== undefined &&
      control.value !== null &&
      control.value !== '' &&
      (isNaN(control.value) || control.value < 1 || control.value > 300)
    ) {
      return { filmDurationValidator: true };
    }
    return null;
  }
}

// console.log(control);
// let duration = control.value;
// let isValid = false;

// if (dru && duration instanceof NgForm) {
//   if (
//     control.controls.duration.value > 0 &&
//     control.controls.duration.value < 300
//   ) {
//     console.log(control);
//     isValid = false;
//   } else isValid = true;
// }

// if (duration > 0 && duration < 300) {
//   console.log(control);
//   isValid = false;
// } else isValid = true;

// return { filmDurationValidator: isValid };

// return { filmDurationValidator: isValid };
