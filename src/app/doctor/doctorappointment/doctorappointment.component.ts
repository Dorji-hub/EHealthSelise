import { authService } from './../../home/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctorappointment',
  templateUrl: './doctorappointment.component.html',
  styleUrls: ['./doctorappointment.component.scss']
})
export class DoctorappointmentComponent implements OnInit {
  Patient;
  userDetail;
  users;
 
  constructor(private authService:authService) { }

  ngOnInit() {
   
    this.getUsers();
    this.getAppointment();
    this.userDetail = JSON.parse(localStorage.getItem('token'));
    this.userDetail = this.userDetail.id;
    
}
getPatientName(id){
  let user = this.users.filter(data=>data.id == id)
  
  return user[0].firstname + " " + user[0].lastname
  
}
// reached here
approveAppointment(user){
  user.access = true;
  this.authService.approveAppointment(user.id, user )
  .subscribe(res=>{
    this.ngOnInit;

    })
}

getUsers(){
  this.authService.getUsers().subscribe((res:Array<any>)=>{
    this.users=res
  });
}

getAppointment(){
  this.authService.getAppointment().subscribe((res:Array<any>)=>{
    let users =res;
    this.Patient= users.filter((data=>data.doctor_id == (this.userDetail) && !(!!data.access)));
  });  
}


}