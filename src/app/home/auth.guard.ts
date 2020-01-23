import { authService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({providedIn: 'root'})
export class authGuard implements CanActivate {
    constructor(private authService: authService, private router:Router) { }

    canActivate(): any{
     
      }
    }
    

