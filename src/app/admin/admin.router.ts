import { GuardGuard } from './../auth/guard.guard';
import { PatientdetailComponent } from './patientdetail/patientdetail.component';
import { DoctordetailComponent } from './doctordetail/doctordetail.component';
import { AdmindashbordComponent } from './admindashbord/admindashbord.component';
import { AdminComponent } from './admin.component';
import {Route} from '@angular/router';

export const AdminRoutes: Route[]=[
    {
        path:'', 
        component: AdminComponent,
        children: [
            { path: 'admin', component:AdmindashbordComponent,canActivate:[GuardGuard]},
            { path: 'doctordetail', component:DoctordetailComponent,canActivate:[GuardGuard]},
            { path: 'patientdetail', component:PatientdetailComponent,canActivate:[GuardGuard]}
        ]
    }
]