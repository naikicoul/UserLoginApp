import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { AppService } from '../app.service';

export const authGuard: CanActivateFn = (route, state) => {

    const appService = inject(AppService);
    const router = inject(Router);

    if (appService.connectedUser()) {
        return true;
    }

    router.navigate(['']);
    return false;
};
