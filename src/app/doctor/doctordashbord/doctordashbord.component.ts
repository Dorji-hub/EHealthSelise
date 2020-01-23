import { authService } from './../../home/auth.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-doctordashbord',
  templateUrl: './doctordashbord.component.html',
  styleUrls: ['./doctordashbord.component.scss']
})
export class doctordashbordcomponent implements OnInit {
doctor;
  constructor(private authService:authService) { }

  ngOnInit() {
    this.doctor= JSON.parse(this.authService.getToken());

  }

}
