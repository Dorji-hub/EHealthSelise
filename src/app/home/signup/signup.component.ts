import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { authService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  success = false;

constructor(private fb: FormBuilder, private authServices: authService, private router: Router) { }

  ngOnInit() {
  this.buildForm();
    
  }
  buildForm(){
  this.signupForm = this.fb.group({
      username: ['',[Validators.required]],
      firstname:['',[Validators.required]],
      lastname: ['',[Validators.required]],
      email:    ['',[Validators.required,Validators.email]],
      role:     ['',[Validators.required]],
      sex:      ['',[Validators.required]],
      phone_no: ['',[Validators.required]],
      password: ['',[Validators.required,Validators.minLength(5)]],

      access:false

    });
  }
  registerUser(){
    this.authServices.registerUser(this.signupForm.value).subscribe(
    res =>{
    this.success = true;
    this.signupForm.reset();
    }
    )
  }
  get email(){
    return this.signupForm.get('email');
    }
  get password(){
    return this.signupForm.get('password');
  }
}