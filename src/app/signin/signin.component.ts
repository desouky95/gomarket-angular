import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {User} from '../models/user';


@Component({
    selector: 'app-signin',
    templateUrl: 'signin.component.html',
    styleUrls: ['signin.component.css']
})
export class SigninComponent implements OnInit {

    options: FormGroup;
    constructor(fb: FormBuilder, private router: Router, public user: UserService) {

    }
    hide = true;
    currentUser: User;
    loggedMessage: string;
    userValid: boolean;
    // email = new FormControl('', [Validators.required, Validators.email]);
    // password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    ngOnInit(): void {
        this.user.currentMessage.subscribe(message => this.loggedMessage = message);
        this.user.currentUser.subscribe(message => this.currentUser = message);
        this.options = fb.group({
            hideRequired: true,
            floatLabel: 'never',
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(8)])
        });
    }
    getErrorMessage() {
        return this.options.get('email').hasError('required') ? 'You must enter a value' :
            this.options.get('email').hasError('email') ? 'Not a valid email' : '';
    }
    getPasswordErrorMessage() {
        return this.options.get('password').hasError('required') ? 'You must enter a value' :
            this.options.get('password').hasError('') ? 'Not a valid password length' : '';
    }

    getAuthErrorMessage() {
        return !this.userValid ? 'Username or Password isn\'t correct' : '' ;
    }


    signin(e) {
        e.preventDefault();
        const user_email = e.target.elements[0].value;
        const user_password  = e.target.elements[1].value;
        const tempUser = new User();
        this.user.checkUser(user_email, user_password).subscribe(data => {
            this.currentUser = data['user'];
            if (this.currentUser == null) {
               this.userValid = false;
            } else {
                this.user.setUserLoggedIn(true, this.currentUser);
                this.user.setInitialPath();
            }
        });
    }
}
