import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Student } from './student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  student: any;

  constructor(private http: HttpClient) { }
  createRegister(student: Student){
    return this.http.post('http://localhost/acesoftech-exam-app/register.php', student);
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
