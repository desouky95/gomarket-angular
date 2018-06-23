///<reference path="../../node_modules/@types/node/index.d.ts"/>
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient, HttpEvent, HttpHeaders, HttpParams} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User} from './models/user';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';


@Injectable()
export class UserService {

    private isUserLoggedIn = new BehaviorSubject(JSON.parse(localStorage.getItem('loggedIn') || 'false'));
    private user = new BehaviorSubject<User>(null);
    currentUser = this.user.asObservable();
    currentMessage = this.isUserLoggedIn.asObservable();

    constructor(private http: HttpClient , private router: Router) {
    }

    setUserLoggedIn(value: boolean, user: User) {
        this.isUserLoggedIn.next(value);
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(user));
        this.user.next(user);
    }

    getUserLoggedIn() {
        return JSON.parse(localStorage.getItem('loggedIn') || this.isUserLoggedIn.value);
    }

    checkUser (email: string, password: string): Observable<User> {
        return this.http.post<User>('http://localhost/GoMarket/public/login', {
            'email': email,
            'password' : password
        });
    }
    setInitialPath() {
        switch (this.user.value.type) {
            case 0 :
                this.router.navigate(['']);
                break;
            case 1 :
                this.router.navigate(['/dashboard/stores']);
        }
    }

    setUserLogout() {
        localStorage.clear();
    }
}
