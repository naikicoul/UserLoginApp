import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path: '', loadComponent: () => LoginComponent
    },
    {
        path: 'profile', loadComponent: () => ProfileComponent, canActivate: [authGuard]
    }
];
