import { Routes } from '@angular/router';
import { LoginForm } from './components/login-form/login-form';
import { RegisterForm } from './components/register-form/register-form';
import { Home } from './components/home/home';
import { Products } from './components/products/products';
import { authLoggedInGuard, authLoginGuard } from './guards/auth-guard-guard';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        canActivate: [authLoginGuard]
    },
    {
        path: 'home',
        component: Home,
        canActivate: [authLoginGuard]
    },
    {
        path: 'login',
        component: LoginForm,
        canActivate: [authLoggedInGuard]
    },
    {
        path: 'register',
        component: RegisterForm,
        canActivate: [authLoggedInGuard]
    },
    {
        path: 'products',
        component: Products,
        canActivate: [authLoginGuard]
    }
];
