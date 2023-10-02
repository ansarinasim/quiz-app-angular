import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http'
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  

  constructor( private http : HttpClient) { }

  getQuestionJson(){
    return this.http.get<any>("assets/questions.json");
 }

 addStudent(student:any){

  console.log(student);
  return this.http.post('http://localhost:8080/students/student-home', student);
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
}
