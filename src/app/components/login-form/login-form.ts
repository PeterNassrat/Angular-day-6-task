import { Component } from '@angular/core';
import { LoginInfo } from '../../interfaces/login-info';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { createLoginrForm } from '../../forms/login-form';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {
  loginForm: FormGroup;
  loggedIn: boolean = false;
  loginInfo: LoginInfo | null = null;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = createLoginrForm(formBuilder);
  }

  onSubmit() {
    this.loginInfo = {
      email: this.loginForm.get('email')?.value
    }
    this.loggedIn = true;
    this.clearForm();
  }

  clearForm() {
    this.loginForm.get('email')?.setValue('');
    this.loginForm.get('password')?.setValue('');
  }

  onLogout() {
    this.loggedIn = false;
    this.loginInfo = null;
  }
}
