import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

    options: FormGroup;

    constructor(fb: FormBuilder, private router: Router, private user: UserService) {
        this.options = fb.group({
            hideRequired: false,
            floatLabel: 'never',
        });
    }
    hide = true;
    selected: number;
    name: string;
    next = false;
    email: string;
    password: string;
    store_name: string;
    address: string;
    email_validation = new FormControl('', [Validators.required, Validators.email]);
    password_validation = new FormControl('', [Validators.required, Validators.minLength(8)]);

    nextForm() {
      this.next = true;
    }
    prevForm() {
      this.next = false;
    }
    getErrorMessage() {
        return this.email_validation.hasError('required') ? 'You must enter a value' :
            this.email_validation.hasError('email') ? 'Not a valid email' : '';
    }
    getPasswordErrorMessage() {
        return this.password_validation.hasError('required') ? 'You must enter a value' :
            this.password_validation.hasError('') ? 'Not a valid password length' : '';
    }


}
