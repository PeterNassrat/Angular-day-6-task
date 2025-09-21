import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { createLoginrForm } from '../../forms/login-form';
import { Router } from '@angular/router';
import { LoginApi } from '../../services/login-api';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {
  loginForm: FormGroup;
  // loggedIn: boolean = false;
  // loginInfo: LoginInfo | null = null;
  errorMsg: string | null = null;
  defaultUserName = 'emilys';
  defaultPassword = 'emilyspass';

  constructor(private formBuilder: FormBuilder,
     private loginService: LoginApi,
     private router: Router,
     private toastr: ToastrService) {
    this.loginForm = createLoginrForm(formBuilder);
    this.loginForm.get('userName')?.setValue(this.defaultUserName);
    this.loginForm.get('pasword')?.setValue(this.defaultPassword);
  }

  onSubmit() {
    this.loginService.login(
      this.loginForm.get('userName')?.value,
      this.loginForm.get('password')?.value
    ).subscribe({
      next: () => {
        // console.log(response);
        this.errorMsg = null;
        this.router.navigate(['/products']);
        this.toastr.success('Logged in successfully', 'Login', {
          positionClass: 'toast-bottom-left',
          closeButton: true,
          progressBar: true,
          timeOut: 3000,
        });
      },
      error: (err) => {
        this.errorMsg = err.error.message || 'Error in login!';
        this.router.navigate(['/login']);
      }
    });
  }

  clearForm() {
    this.loginForm.get('userName')?.setValue('');
    this.loginForm.get('password')?.setValue('');
  }
}
