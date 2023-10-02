import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { StudentService } from '../../../student.service';

@Component({
  selector: 'app-student-course',
  templateUrl: './student-course.component.html',
  styleUrls: ['./student-course.component.css']
})
export class StudentCourseComponent implements OnInit {

  showTab = 1;
  tabToggle(index: number) {
    this.showTab = index;
  }
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
