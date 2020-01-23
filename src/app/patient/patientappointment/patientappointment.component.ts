import { Router } from '@angular/router';
import { authService } from './../../home/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-patientappointment',
  templateUrl: './patientappointment.component.html',
  styleUrls: ['./patientappointment.component.scss']
})
export class PatientappointmentComponent implements OnInit {
  appointmentForm:FormGroup;
  userid;
  users;
  doctors;
  success= false;
  constructor(private fb:FormBuilder, private authService:authService, private router:Router) { }

  ngOnInit() {
    this.userid = JSON.parse(localStorage.getItem('token'));
    this.getDoctor();
    this.buildForm();
  }
  buildForm(){
    this.appointmentForm=this.fb.group({

      illness:         ['',[Validators.required]],
      doctor_id:       ['',[Validators.required]],
      appointment_time:['',[Validators.required]],
      appointment_date:['',[Validators.required]],
      file:[],
      user_id: this.userid.id,
      access: false
    });
}

  getDoctor(){
    this.authService.getUsers().subscribe(res=> {
      this.users = res;
      this.doctors = this.users.filter(data=>data.role ==='doctor' &&(!!data.access));  
    }
      )
  }
submitAppointment(){
  this.authService.submitAppointment(this.appointmentForm.value).subscribe(
    res =>{
    this.success = true;
    this.appointmentForm.reset();
   
    }
    )
}
}
