import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputValidation } from '../common/validators/input.validations';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css'],
})
export class ConfirmPasswordComponent {
  changePasswordForm: FormGroup;
  constructor(public formBuilder: FormBuilder) {
    this.changePasswordForm = formBuilder.group(
      {
        oldPassword: [
          '',
          [Validators.required],
          [InputValidation.validatepasssword],
        ],
        newPassword: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validator: InputValidation.confirmPassword,
      }
    );
  }
  get oldPassword() {
    return this.changePasswordForm.get('oldPassword');
  }
  get newPassword() {
    return this.changePasswordForm.get('newPassword');
  }
  get confirmPassword() {
    return this.changePasswordForm.get('confirmPassword');
  }
  submitForm() {
    alert('Passowrd Updated');
  }
  log(comp: any) {
    console.log(comp);
  }
}
