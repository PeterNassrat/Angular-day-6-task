import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginApi } from '../../services/login-api';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  constructor(public loginService: LoginApi) {}

  logout() {
    this.loginService.logout();
  }
}
