import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';
import {User} from './models/user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Go Market';
  loggedMessage: boolean;
  currentUser: User;
  currentUserId: string;
   constructor(private http: HttpClient, private user: UserService , private router: Router) {}

    ngOnInit() {
        this.user.currentMessage.subscribe(message => this.loggedMessage = message);
        this.user.currentUser.subscribe(message => this.currentUser = message);
        this.currentUserId = localStorage.getItem('loggedIn');
        console.log(this.loggedMessage);
        if (this.currentUserId == null) {
            this.router.navigate(['signin']);
        } else {
            this.user.setUserLoggedIn(true, <User>JSON.parse(localStorage.getItem('user')));
        }
    }

    logout() {
       this.user.setUserLogout();
       this.router.navigate(['signin']);
    }

}
