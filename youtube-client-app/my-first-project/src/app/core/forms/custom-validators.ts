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

  static urlValidity(control: FormControl): { [key: string]: boolean } | null {
    const validExp =
      /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?!0)(?:(?!0[^.]|255)[0-9]{1,3}\.){3}(?!0|255)[0-9]{1,3})(?:\/[a-z0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/;
    if (control.value && !validExp.test(control.value)) {
      return { urlValidity: true };
    }
    return null;
  }

  static actualDate(control: FormControl): { [key: string]: boolean } | null {
    const currentDate: Date = new Date();
    const enteredDate: Date = new Date(control.value);
    let dateDiff =
      (currentDate.getTime() - enteredDate.getTime()) / 1000 / 60 / 60 / 24;
    if (control.value && (isNaN(dateDiff) || dateDiff < 0)) {
      return { actualDate: true };
    }
    return null;
  }
}
