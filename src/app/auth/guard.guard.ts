import { authService } from './../home/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate{
  constructor(private router: Router, private authService:authService){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(!!localStorage.getItem('token')){
      return true;
    }else{
      this.router.navigate(['/login']);
    }
  }
}
  

