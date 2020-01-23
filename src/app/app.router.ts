import { AdminRoutes } from './admin/admin.router';
import { DoctorRoutes } from './doctor/doctor.router';
import {Routes} from '@angular/router';
import { HomeRoutes } from './home/home.router';
import { PatientRoutes } from './patient/patient.router';

export const routes: Routes=[...HomeRoutes, ...PatientRoutes, ...DoctorRoutes, ...AdminRoutes ];
