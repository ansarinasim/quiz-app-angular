import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Category } from './categoty';
import { ApiService } from './api.service';
import { Student } from './student';
import { Question } from './question';
import { Admin } from './admin';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  student: any;
  question:any;
  patchValue(data: any) {
    throw new Error('Method not implemented.');
  }
  messages: any;
  

  constructor(private http: HttpClient) { }
  imageUpload(first_name : string,
    last_name : string,
    email: string,
    contact_no : string,
    registration: string,
    gender : string,
    dob : string,
    course_name : string,
    address : string,
    profileImage : File): Observable<any> {
      var formData : any = new FormData();
      formData.append("first_name", first_name);
      formData.append("last_name", last_name);
      formData.append("email", email);
      formData.append("contact_no", contact_no);
      formData.append("registration", registration);
      formData.append("gender", gender);
      formData.append("dob", dob);
      formData.append("course_name", course_name);
      formData.append("address", address);
      formData.append("fileToUpload", profileImage);
      return this.http.post('http://localhost/acesoftech-exam-app/student.php',
      formData, {
        reportProgress : true,
        observe : 'events'
      }).pipe(
        catchError((err: any) => {
          //this,progress = null;
          //alert(err.message);
          return throwError(err.message);
        })
      )
    }
    login(username: string, password: string) {
      return this.http.post<any>(`/users/authenticate`, { username: username, password: password })
          .pipe(map((user:any) => {
              return user;
          }));
  }
  
  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('email');
  }
  getCategory() {
    return this.http.get<Category[]>('http://localhost/acesoftech-exam-app/list_category.php');
  }
  createStudent(){
    return this.http.post('http://localhost/acesoftech-exam-app/student.php', this.student);
  }

  getStudent() {
    return this.http.get<Student[]>('http://localhost/acesoftech-exam-app/student_list.php');
  }

  getAdmin() {
    return this.http.get<Admin[]>('http://localhost/acesoftech-exam-app/admin_detail.php');
  }

  deleteStudent(id:number){
    console.log(id)
    return this.http.delete<Student[]>('http://localhost/acesoftech-exam-app/delete.php?id=' + id);
  }

}
