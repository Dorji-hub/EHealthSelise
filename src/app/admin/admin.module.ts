import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashbordComponent } from './admindashbord/admindashbord.component';
import { DoctordetailComponent } from './doctordetail/doctordetail.component';
import { PatientdetailComponent } from './patientdetail/patientdetail.component';


@NgModule({
  declarations: [AdmindashbordComponent, DoctordetailComponent, PatientdetailComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
