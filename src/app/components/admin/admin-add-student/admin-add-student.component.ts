import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../../admin.service';
import { ApiService } from '../../../api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../../../app.component';
@Component({
  selector: 'app-admin-add-student',
  templateUrl: './admin-add-student.component.html',
  styleUrls: ['./admin-add-student.component.css']
})
export class AdminAddStudentComponent{

  public user = "user"
  auth: any;
  session_email:any;
  progress: number=0;
  form: FormGroup;
  imageUploadService: any;
  msgs: any;
  imgMsg: any;
  constructor(private router: Router,
    public fb: FormBuilder,
    public adminService: AdminService) {
      //imageupload part
  this.form = this.fb.group({
    first_name: [''],
    last_name: [''],
    email: [''],
    contact_no: [''],
    registration: [''],
    gender: [''],
    dob: [''],
    course_name: [''],
    address: [''],
    image: [null]
  })
     }

  ngOnInit(): void {
    
    
  }
//refresh the page
  
  //upload file
  uploadFile(event:any){
    const file = event.target.files ? event.target.files[0] : '';
    console.log(file);
    this.form.patchValue({
      image: file
    });
    this.form.get('image')?.updateValueAndValidity()
  }
 
   //submit function
   submitImage(){

    this.adminService.imageUpload(
      this.form.value.first_name,
      this.form.value.last_name,
      this.form.value.email,
      this.form.value.contact_no,
      this.form.value.registration,
      this.form.value.gender,
      this.form.value.dob,
      this.form.value.course_name,
      this.form.value.address,
      this.form.value.image
      
    ).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.UploadProgress:
          if(event.total) {
            this.progress = Math.round((100 / event.total) * event.loaded);
            this.msgs = `Uploaded!  ${this.progress}%`;
            
          }
          break;
          case HttpEventType.Response:
              event.body;
              if(event.body.error) {
                this.imgMsg = event.body.error
              }
              else if(event.body.success){
                this.imgMsg = event.body.success
              }
              //console.log(event.body);
              setTimeout(() => {
                this.progress = 0;
                this.msgs = '';
              }, 1500);
              
      }
    })
    

  }

}

