import { doctordashbordcomponent } from './doctordashbord/doctordashbord.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
;
import { DoctorappointmentComponent } from './doctorappointment/doctorappointment.component';
import { CheckuphistoryComponent } from './checkuphistory/checkuphistory.component';



@NgModule({
  declarations: [doctordashbordcomponent,DoctorappointmentComponent, CheckuphistoryComponent],
  imports: [
    CommonModule
  ]
})
export class DoctorModule { }
