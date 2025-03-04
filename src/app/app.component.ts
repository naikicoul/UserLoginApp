import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RouterLink, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    appService = inject(AppService);

    connectedUser = this.appService.connectedUser;
}
