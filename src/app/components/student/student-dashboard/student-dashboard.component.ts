import { Component, OnInit } from '@angular/core';
import { StudentSidebarComponent } from '../student-sidebar/student-sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { ApiService } from '../../../api.service';
import { NgModule } from '@angular/core';
import { StudentService } from '../../../student.service';
@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  loginbtn: boolean;
  logoutbtn: boolean;
  router: any;
  auth:any;
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

    this.auth = localStorage.getItem('token');

    if(!this.auth){
      this.router.navigate(['/student-signin']);
    }

  }


}
