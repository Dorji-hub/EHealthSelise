import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})

export class authService {
constructor(private http: HttpClient, private router:Router){}

isLoggedIn(){
    return !!localStorage.getItem('token')
}

getUsers(){
    return this.http.get('http://localhost:3000/users');
}
//admin approve and decline action
delete(id: number){
    return this.http.delete(`http://localhost:3000/users/${id}`);
}
approveUser(id, userData){
    return this.http.put(`http://localhost:3000/users/${id}`, userData);
}

getAppointment(){
    return this.http.get('http://localhost:3000/appointment');
}
//doctor approve

approveAppointment(id,userData){
    return this.http.put(`http://localhost:3000/appointment/${id}`,userData);
}
// signup action
registerUser(userData){
    return this.http.post('http://localhost:3000/users', userData);
}
logIn(){
    return !!localStorage.getItem('token')
}
getUser(id){
    return this.http.get(`http://localhost:3000/users/${id}`);
}
//patient appointment subbmit action
submitAppointment(appointment){
    return this.http.post('http://localhost:3000/appointment',appointment);
}
getToken(){
    return localStorage.getItem('token');
}
sendEmail(data){
    return this.http.post('http://localhost:3000/email',data)
}
}