import { GuardGuard } from './../auth/guard.guard';
import { PatienthistoryComponent } from './patienthistory/patienthistory.component';
import { PatientappointmentComponent } from './patientappointment/patientappointment.component';
import { PatientdashbordComponent } from './patientdashbord/patientdashbord.component';
import { PatientComponent } from './patient.component';
import { Route } from '@angular/router';

export const PatientRoutes: Route[]=[
    {
        path:'',
        canActivate:[GuardGuard],
        component:PatientComponent,
        children:[
            {path:'patient', component:PatientdashbordComponent},
            {path:'patientappointment', component:PatientappointmentComponent},
            {path:'patienthistory', component:PatienthistoryComponent}
        ]
    }
    
]