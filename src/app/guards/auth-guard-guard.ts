import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginApi } from '../services/login-api';

export const authLoginGuard: CanActivateFn = (route, state) => {
  const auth = inject(LoginApi);
  const router = inject(Router);

  if(auth.isLoggedIn()) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};

export const authLoggedInGuard: CanActivateFn = (route, state) => {
  const auth = inject(LoginApi);
  const router = inject(Router);

  if(!auth.isLoggedIn()) {
    return true;
  }

  router.navigate(['/home']);
  return false;
};