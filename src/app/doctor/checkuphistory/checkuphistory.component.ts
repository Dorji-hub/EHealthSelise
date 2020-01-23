import { authService } from './../../home/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkuphistory',
  templateUrl: './checkuphistory.component.html',
  styleUrls: ['./checkuphistory.component.scss']
})
export class CheckuphistoryComponent implements OnInit {
  userDetail;
  userId;
  users;
  Patient;
  constructor(private authService:authService) { }

  ngOnInit() {
    this.getUsers();
    this.getAppointment();
    this.userDetail = JSON.parse(localStorage.getItem('token'));
    this.userId = this.userDetail.id;
  }
  getUsers(){
    this.authService.getUsers().subscribe((res:Array<any>)=>{
      this.users=res
    });
  }
  getUserName(id){
    let user = this.users.filter(data=>data.id == id)
    
    return user[0].firstname + " " + user[0].lastname
    
  }

  getAppointment(){
    this.authService.getAppointment().subscribe((res:Array<any>)=>{
      let users =res;
      this.Patient= users.filter((data=>data.doctor_id == (this.userId)));
  
    });  
  }

}
