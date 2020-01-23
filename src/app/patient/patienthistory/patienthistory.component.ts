import { authService } from './../../home/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patienthistory',
  templateUrl: './patienthistory.component.html',
  styleUrls: ['./patienthistory.component.scss']
})
export class PatienthistoryComponent implements OnInit {
  Patient;
  PatientDetail;
  userId: number;
  users;
  constructor(private authService: authService ) { }

  ngOnInit() {
    this.getUsers();
    this.getAppointment();
    this.PatientDetail = JSON.parse(localStorage.getItem('token'));
    this.userId = this.PatientDetail.id;
  }
  getDoctorName(id){
    let user = this.users.filter(data=>data.id == id)
    return user[0].firstname + " " + user[0].lastname
  }
  getPatientName(id){
    let user = this.users.filter(data=>data.id == id)
    
    return user[0].firstname + " " + user[0].lastname
    
  }
  getUsers(){
    this.authService.getUsers().subscribe((res:Array<any>)=>{
      this.users=res
    });
  }

  getAppointment(){
    this.authService.getAppointment().subscribe((res:Array<any>)=>{
      let users =res;
      this.Patient= users.filter(data=>data.user_id === this.userId);

    });  
  }

}