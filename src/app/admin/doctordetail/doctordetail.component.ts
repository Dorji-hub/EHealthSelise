import { authService } from './../../home/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctordetail',
  templateUrl: './doctordetail.component.html',
  styleUrls: ['./doctordetail.component.scss']
})
export class DoctordetailComponent implements OnInit {
  users;

  constructor(private authService: authService) { }

  ngOnInit() {
    this.getUsers("doctor");
  }
  getUsers(userType){
    this.authService.getUsers().subscribe((res:Array<any>)=>{
      const users = res;
      this[userType]= users.filter(data=>data.role === userType &&(!!data.access));
    }
    );
  }
  delete(user): void{
    this.authService.delete(user.id).subscribe(data=>{
    this.users = this.users.filter(u=>u!==user);  
    })
  };

}