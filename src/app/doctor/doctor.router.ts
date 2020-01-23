import { GuardGuard } from './../auth/guard.guard';
import { doctordashbordcomponent } from './doctordashbord/doctordashbord.component';
import { DoctorappointmentComponent } from './doctorappointment/doctorappointment.component';
import { CheckuphistoryComponent } from './checkuphistory/checkuphistory.component';

import { DoctorComponent } from './doctor.component';
import { Route } from '@angular/router';

export const DoctorRoutes: Route[]=[
    {
        path:'',
        canActivate:[GuardGuard],
        component:DoctorComponent,
        children:[
            {path:'doctor', component:doctordashbordcomponent},
            {path:'checkuphistory', component:CheckuphistoryComponent},
            {path:'doctorappointment', component:DoctorappointmentComponent} 
        ]
    }
]