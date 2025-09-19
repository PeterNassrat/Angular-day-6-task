import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { createRegisterForm } from '../../forms/register-form';
import { RegistrationInfo } from '../../interfaces/registration-info';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css'
})
export class RegisterForm {
  registrationForm: FormGroup;
  registered: boolean = false;
  registrationInfo: RegistrationInfo | null = null;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = createRegisterForm(formBuilder);
  }

  onSubmit() {
    this.registrationInfo = {
      fullName: this.registrationForm.get('fullName')?.value,
      email: this.registrationForm.get('email')?.value,
      phoneNumber: this.registrationForm.get('phoneNumber')?.value
    }
    this.registered = true;
    this.clearForm();
  }

  clearForm() {
    this.registrationForm.get('fullName')?.setValue('');
    this.registrationForm.get('email')?.setValue('');
    this.registrationForm.get('phoneNumber')?.setValue('');
    this.registrationForm.get('password')?.setValue('');
    this.registrationForm.get('confirmPassword')?.setValue('');
  }

  onLogout() {
    this.registered = false;
    this.registrationInfo = null;
  }
}
