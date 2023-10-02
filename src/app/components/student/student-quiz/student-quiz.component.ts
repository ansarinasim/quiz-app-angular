import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { StudentService } from '../../../student.service';

@Component({
  selector: 'app-student-quiz',
  templateUrl: './student-quiz.component.html',
  styleUrls: ['./student-quiz.component.css']
})
export class StudentQuizComponent implements OnInit {

  loginbtn: boolean;
  logoutbtn: boolean;
  router: any;
  session_email: any;

  constructor(private dataService: ApiService, private studentService: StudentService) {
    dataService.getloggedInName.subscribe(name => this.changeName(name));

    if (this.dataService.isLoggedIn()) {
      console.log("loggedIn");
      this.loginbtn = false;
      this.logoutbtn = true
    }
    else {
      this.loginbtn = true;
      this.logoutbtn = false
    }
   }
   private changeName(name: boolean): void {
    this.logoutbtn = name;
    this.loginbtn = !name;
  }

  logout() {
    this.dataService.deleteToken();
    window.location.href = window.location.href;
  }

  gotoHome() {
    this.router.navigate(['/home']);  // define your component where you want to go
  }
  ngOnInit() {

    this.session_email = localStorage.getItem('email');

  }

   }

  
