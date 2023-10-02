import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Admin } from './admin';
@Injectable({
    providedIn: 'root'
})

export class ApiService {
    
   @Output() getloggedInName: EventEmitter<any> = new EventEmitter();
   redirectUrl!: string;
   baseUrl: string= "http://localhost/acesoftech-exam-app/";

   constructor(private httpClient : HttpClient) { }
   


    public adminlogin(email:any, password:any) {
        //alert(email)
        return this.httpClient.post<any>(this.baseUrl + '/admin_login.php', {email,password})
        .pipe(map(Users => {
           // console.log('AA'+Users)

            console.log('AA'+JSON.stringify(Users));
            if(Users.message!='failed'){
                this.setToken(Users.email);
                this.getloggedInName.emit(true);
            }
            else{
           // this.setToken(Users.email);
            this.getloggedInName.emit(false);
           } 

            return Users;
        }));
    }
    setToken(token: string) {
        localStorage.setItem('token', token);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    deleteToken() {
        localStorage.removeItem('token');
    }

    isLoggedIn() {
        const usertoken = this.getToken();
        if (usertoken !=null) {
            return true
        }
        return false;
    }
    
}