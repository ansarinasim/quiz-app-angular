import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from '../../../api.service';
import { StudentService } from '../../../student.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../../../app.component';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-student-signin',
  templateUrl: './student-signin.component.html',
  styleUrls: ['./student-signin.component.css']
})
export class StudentSigninComponent implements OnInit {
  complexForm: FormGroup
  constructor(private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router) {
      this.complexForm = this.fb.group({
        email: ['', [Validators.required,Validators.minLength(1), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.email]],
        password: ['', Validators.required],

      });
     }

     postdata(complexForm:any){
      this.dataService.userlogin(complexForm.value.email,complexForm.value.password)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          if(data.message=='success'){ 
           
           

             // store user details and jwt token in local storage to keep user logged in between page refreshes
             localStorage.setItem('email',data.email);
         


           const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/student-dashboard';
           
           this.router.navigate(['/student-dashboard']);
          
          //this.router.navigate(['/student-dashboard']);
          }
        },
        error => {
          alert("user name or password is incorrect")
        });
        }

  ngOnInit(): void {
  }

}
