import { AbstractControl, ValidationErrors } from '@angular/forms';

export class InputValidation {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0)
      return { cannotContainSpace: true };
    return null;
  }
  static shouldbeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'user1') resolve({ shouldbeUnique: true });
        else resolve(null);
      }, 2000);
    });
  }
  static validatepasssword(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (control.value !== '123456') resolve({ passwordNotMatched: true });
        else resolve(null);
      }, 2000);
    });
  }
  static confirmPassword(control: AbstractControl): ValidationErrors | null {
    let newpass = control.get('newPassword')?.value;
    let conPass = control.get('confirmPassword')?.value;
    console.log('Control: ', control);
    console.log('newP: ', newpass, 'conP: ', conPass);
    if (newpass !== conPass) return { notConfirmed: true };
    return null;
  }
}
