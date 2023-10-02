import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
@Injectable({
    providedIn: 'root'
})

export class ApiService {
    

   redirectUrl!: string;
   baseUrl: string= "http://localhost/acesoftech-exam-app/";

   @Output() getloggedInName: EventEmitter<any> = new EventEmitter();

   constructor(private httpClient : HttpClient) { }
    /**Question category */
   public questioncategory(
    id:any,
    cat_id:any,
    cat_name:any,
    // parent_id:any,
    // cat_des:any,
    ) {
    return this.httpClient.post<any>(this.baseUrl + '/category.php',
    {
        id,cat_id,cat_name}

    )
    .pipe(map(Users => {
        return Users;
        
    }));
}

    /**Question category */
   public postQuestion(
    questionText:any,
    cat_name:any,
    cat_id:any,
    options:any,
    text: any,
    correct: any,
    explanation: any,
    ) {
    return this.httpClient.post<any>(this.baseUrl + '/add_question.php',
    {
        cat_id,cat_name,questionText,options,text,correct,explanation }

    )
    .pipe(map(Users => {
        return Users;
    }));
}


    public userlogin(email:any, password:any) {
        //alert(email)
        return this.httpClient.post<any>(this.baseUrl + '/login.php', {email,password})
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