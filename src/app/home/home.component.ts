import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    loggedMessage: boolean;
    currentUser: User;

    constructor(private http: HttpClient, private user: UserService) {}

    ngOnInit() {
        this.user.currentMessage.subscribe(message => this.loggedMessage = message);
        this.user.currentUser.subscribe(message => this.currentUser = message);
    }

}
