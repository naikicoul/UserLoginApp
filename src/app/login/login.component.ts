import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppService } from '../app.service';

@Component({
    selector: 'app-login',
    imports: [
        ReactiveFormsModule, CommonModule
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {

    appService = inject(AppService);
    router = inject(Router);

    errorLogin: boolean = false;

    form: FormGroup = new FormGroup({
        username: new FormControl<string>('', [Validators.required]),
        password: new FormControl<string>('', [Validators.required])
    });

    onSubmit() {
        this.errorLogin = false;
        const connectedUser = this.appService.authenticateUser(this.form.controls['username'].value, this.form.controls['password'].value);
        if (connectedUser) {
            this.router.navigate(['/profile']);
        }

        this.errorLogin = true;
        this.form.reset();
    }

}
