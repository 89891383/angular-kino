import { Directive } from '@angular/core';
import {
  NG_VALIDATORS,
  Validator,
  AbstractControl,
  FormGroup,
} from '@angular/forms';

@Directive({
  selector: '[appDateValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DateValidatorDirective,
      multi: true,
    },
  ],
})
export class DateValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } | null {
    let today = new Date();
    let year = today.getFullYear();
    let monthNumber = today.getMonth() + 1;
    let dayNumber = today.getDate();
    let hoursNumber = today.getHours();
    let minutesNumber = today.getMinutes();
    let month;
    let day;
    let hours;
    let minutes;

    if (monthNumber < 10) month = '0' + monthNumber.toString();
    else month = monthNumber.toString();
    if (dayNumber < 10) day = '0' + dayNumber.toString();
    else day = dayNumber.toString();

    if (hoursNumber < 10) hours = '0' + hoursNumber.toString();
    else hours = hoursNumber.toString();
    if (minutesNumber < 10) minutes = '0' + minutesNumber.toString();
    else minutes = minutesNumber.toString();

    let date = year + '-' + month + '-' + day;

    let isValid = false;

    if (control && control instanceof FormGroup) {
      const group = control as FormGroup;

      if (
        group.controls.hour !== null &&
        group.controls.date &&
        group.controls.hour
      ) {
        if (
          new Date(group.controls.date.value).getTime() ===
            new Date(date).getTime() &&
          Number(group.controls.hour.value.substr(0, 2)) == Number(hours) &&
          Number(group.controls.hour.value.substr(3, 2)) < Number(minutes)
        ) {
          isValid = false;
        } else if (
          new Date(group.controls.date.value).getTime() ===
            new Date(date).getTime() &&
          Number(group.controls.hour.value.substr(0, 2)) < Number(hours) &&
          group.controls.hour.value.substr(0, 2) !== '' &&
          group.controls.hour.value.substr(3, 2) !== ''
        ) {
          isValid = false;
        } else if (
          new Date(group.controls.date.value).getTime() <
          new Date(date).getTime()
        ) {
          isValid = false;
        } else {
          isValid = true;
        }
      }

      if (!isValid) return { timeValidator: true };
      else return null;
    }
  }
}
