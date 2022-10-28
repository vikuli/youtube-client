import { FormControl } from '@angular/forms';

export class CustomValidators {
  static letterCase(control: FormControl): { [key: string]: boolean } | null {
    if (
      control.value &&
      (control.value.toLowerCase() === control.value ||
        control.value.toUpperCase() === control.value)
    ) {
      return { letterCase: true };
    }
    return null;
  }

  static existenceNumbers(
    control: FormControl
  ): { [key: string]: boolean } | null {
    if (control.value && !/[0-9]/g.test(control.value)) {
      return { existenceNumbers: true };
    }
    return null;
  }

  static existenceSpecCharacter(
    control: FormControl
  ): { [key: string]: boolean } | null {
    if (
      control.value &&
      !/[~`!@#$%^&*()_+={}[\]\\|;:'",<.>/?№-]/g.test(control.value)
    ) {
      return { existenceSpecCharacter: true };
    }
    return null;
  }
}
