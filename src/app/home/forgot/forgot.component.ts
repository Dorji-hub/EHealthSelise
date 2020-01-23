import { authService } from './../auth.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  success=false;
  forgotForm:FormGroup;

  constructor(private fb:FormBuilder, private http:HttpClient,private authService:authService) { }

  ngOnInit() {
 this.buildForm();
  }
buildForm(){
  this.forgotForm= this.fb.group({
  email:['',Validators.required]
  })

 
}
sendEmail(){
 this.authService.sendEmail(this.forgotForm.value).subscribe(
  res =>{
  this.success = true;
  this.forgotForm.reset();
 
}
 );
}
}

