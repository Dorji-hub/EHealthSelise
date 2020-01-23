import { Router } from '@angular/router';
import { authService } from './../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  success= false;

  constructor(private fb: FormBuilder, private authService:authService, private router: Router) { }

  ngOnInit() {
    this.buildForm()
  }
  buildForm(){
    this.loginForm = this.fb.group({
      username: [undefined,Validators.required],
      password: [undefined,Validators.compose([Validators.required,Validators.minLength(5)])]
    });
  }
  login(){
    this.authService.getUsers().subscribe((res:Array<any>)=>{
      const users = res;
      const user = users.filter(data=>data.username===this.loginForm.value.username
        &&data.password===this.loginForm.value.password
        &&data.access);
        if(user.length){
          localStorage.setItem('token',JSON.stringify(user[0]))
          this.router.navigate([`/${user[0]['role']}`]);
        }else {
          this.success=true;
        }
    }
  
    );
}
get username(){
  return this.loginForm.get('username');
}
get password(){
  return this.loginForm.get('password');
}
}