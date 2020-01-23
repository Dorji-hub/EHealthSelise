import { authService } from './../../home/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patientdashbord',
  templateUrl: './patientdashbord.component.html',
  styleUrls: ['./patientdashbord.component.scss']
})
export class PatientdashbordComponent implements OnInit {
 patient;

  constructor(private authService:authService) { }

  ngOnInit() {
    this.patient= JSON.parse(this.authService.getToken());
  }
  }

