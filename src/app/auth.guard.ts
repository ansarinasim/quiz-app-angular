import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {      
  constructor(private dataService:ApiService,
    private router: Router) {

   }      
  canActivate(route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot) {
   if (localStorage.getItem('currentUser')) {
         // logged in so return true
        return true;
   }

  // not logged in so redirect to login page with the return url and return false
 this.router.navigate(['admin-home'], { queryParams: { returnUrl: state.url }});
 return false;
}


// canActivate(
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot): any {
//   //return true;

//   const routeurl: string = state.url; 
//     return this.isLogin(routeurl);

// }

// isLogin(routeurl: string) {
//   if(this.dataService.isLoggedIn()) {
//     return true;
//   }

//   this.dataService.redirectUrl = routeurl;
//   this.router.navigate(['/student-signin'], {queryParams: { returnUrl: routeurl }} );
//   }

  
}    
