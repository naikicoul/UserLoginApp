import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AppService } from '../app.service';

@Component({
    selector: 'app-profile',
    imports: [],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export class ProfileComponent {

    appService = inject(AppService);
    router = inject(Router);

    connectedUser = this.appService.connectedUser;

    logout() {
        this.appService.disconnectUser();
        this.router.navigate(['']);
    }

}
