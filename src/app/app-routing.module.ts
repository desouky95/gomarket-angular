import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SignupComponent} from './signup/signup.component';
import {AppComponent} from './app.component';
import {AuthguardGuard} from './authguard.guard';
import {StoresComponent} from './stores/stores.component';
import {MediaComponent} from './media/media.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes  = [

    { path : '' , component : AppComponent },
    { path : 'signin' , component : SigninComponent},
    { path : 'signup' , component : SignupComponent},
    { path : 'dashboard' , component : DashboardComponent , canActivate : [AuthguardGuard] ,
        children : [
            { path : 'stores' , component : StoresComponent }
        ]
    },
    { path : 'stores' , component : StoresComponent}



];

@NgModule({
    exports: [ RouterModule ],
    imports: [ RouterModule.forRoot(routes), RouterModule.forChild(routes) ]

})
export class AppRoutingModule {}
