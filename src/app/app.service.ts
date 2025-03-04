import { computed, Injectable, signal } from '@angular/core';

import { User } from './model/user';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    private readonly users: Array<User> = [
        {
            firstName: 'Luke',
            lastName: 'Skywalker',
            userName: 'luke',
            password: 'usetheforce',
            email: 'luke@starwars.com',
            rank: 'Master Jedi'
        },
        {
            firstName: 'Han',
            lastName: 'Solo',
            userName: 'han',
            password: 'chewi',
            email: 'hansolo@starwars.com',
            rank: 'Scavenger'
        }
    ];

    private _connectedUser = signal<User | undefined>(undefined);
    connectedUser = computed(() => this._connectedUser());

    authenticateUser(username: string, userPassword: string): User | undefined {
        const user = this.users.find(({userName, password}) => userName === username && password === userPassword);
        this._connectedUser.set(user);
        return user;
    }

    disconnectUser() {
        this._connectedUser.set(undefined);
    }

}
