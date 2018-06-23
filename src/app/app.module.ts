import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { SigninComponent} from './signin/signin.component';
import { MaterialModule} from './material/material.module';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { UserService} from './user.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthguardGuard } from './authguard.guard';
import { StoresComponent } from './stores/stores.component';
import { MediaComponent } from './media/media.component';
import {StoresService} from './stores.service';

@NgModule({
    declarations: [
        AppComponent,
        SigninComponent,
        DashboardComponent,
        HomeComponent,
        SignupComponent,
        ToolbarComponent,
        StoresComponent,
        MediaComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [UserService, AuthguardGuard, StoresService],
    bootstrap: [AppComponent]
})
export class AppModule { }
