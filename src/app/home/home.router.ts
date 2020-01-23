import { ForgotComponent } from './forgot/forgot.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home.component';
import {Route} from '@angular/router';

export const HomeRoutes: Route[]=[
    {
        path:'',
        component:HomeComponent,
        children:[
            {path:'login', component:LoginComponent },
            {path:'signup', component:SignupComponent},
            {path:'forgot', component:ForgotComponent}
        ]
    }
]