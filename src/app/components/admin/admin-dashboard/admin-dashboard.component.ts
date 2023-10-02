// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-admin-dashboard',
//   templateUrl: './admin-dashboard.component.html',
//   styleUrls: ['./admin-dashboard.component.css']
// })
// export class AdminDashboardComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { FooterComponent } from '../../student/footer/footer.component';
import { ApiService } from '../../../admin_api.service'
import { NgModule } from '@angular/core';
import { AdminService } from '../../../admin.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
   styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  loginbtn: boolean;
  logoutbtn: boolean;
  router: any;
  auth:any;
  session_email: any;

  constructor(private dataService: ApiService, private adminService: AdminService) {
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
      this.router.navigate(['/admin-signin']);
    }

  }


}
