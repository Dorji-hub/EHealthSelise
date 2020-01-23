import { authService } from './../../home/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admindashbord',
  templateUrl: './admindashbord.component.html',
  styleUrls: ['./admindashbord.component.scss']
})
export class AdmindashbordComponent implements OnInit {
  users;

  constructor(private authService:authService) {
  }

  ngOnInit() {
      this.getUsers("patient");
      this.getUsers("doctor");
  }

  getUsers(userType){
    this.authService.getUsers().subscribe((res:Array<any>)=>{
      const users = res;
      this[userType]= users.filter(data=>data.role === userType &&!(!!data.access));
    }
    );
  }
approve(user){
  user.access = true;
  this.authService.approveUser(user.id, user )
  .subscribe(res=>{
   this.ngOnInit;
  }
  )}
}