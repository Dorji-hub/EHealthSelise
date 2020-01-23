import { GuardGuard } from './../auth/guard.guard';
import { authService } from './../home/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientappointmentComponent } from './patientappointment/patientappointment.component';
import { PatienthistoryComponent } from './patienthistory/patienthistory.component';
import { PatientdashbordComponent } from './patientdashbord/patientdashbord.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PatientdashbordComponent, PatienthistoryComponent, PatientappointmentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[authService,GuardGuard]
})
export class PatientModule { }
