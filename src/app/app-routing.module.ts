import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/student/home/home.component';
import { QuestionComponent } from './components/questions/question/question.component';
import { QnHtmlComponent } from './components/questions/qn-html/qn-html.component';
import { QnCssComponent } from './components/questions/qn-css/qn-css.component';
import { QnAngularComponent } from './components/questions/qn-angular/qn-angular.component';
import { QnReactComponent } from './components/questions/qn-react/qn-react.component';
import { QnJavascriptComponent } from './components/questions/qn-javascript/qn-javascript.component';
import { QnTypescriptComponent } from './components/questions/qn-typescript/qn-typescript.component';
import { QnPhpComponent } from './components/questions/qn-php/qn-php.component';
import { QnJsxComponent } from './components/questions/qn-jsx/qn-jsx.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';
import { StudentHomeComponent } from './components/student/student-home/student-home.component';
import { AdminAddQnComponent } from './components/admin/admin-add-qn/admin-add-qn.component';
import { StudentSigninComponent } from './components/student/student-signin/student-signin.component';
import { AdminAddStudentComponent } from './components/admin/admin-add-student/admin-add-student.component';
import { AdminBlockComponent } from './components/admin/admin-block/admin-block.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { AdminManageComponent } from './components/admin/admin-manage/admin-manage.component';
import { AdminSettingComponent } from './components/admin/admin-setting/admin-setting.component';
import { StudentCourseComponent } from './components/student/student-course/student-course.component';
import { StudentRankComponent } from './components/student/student-rank/student-rank.component';
import { StudentQuizComponent } from './components/student/student-quiz/student-quiz.component';
import { AuthGuard } from './auth.guard';
import { StudentSettingComponent } from './components/student/student-setting/student-setting.component';
import { AdminCategoryComponent } from './components/admin/admin-category/admin-category.component';
const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:"full"},
  { path:"home", component: HomeComponent},
  { path: "question", component: QuestionComponent},
  { path: "qn-html", component: QnHtmlComponent},
  { path: "qn-css", component: QnCssComponent},
  { path: "qn-javascript", component: QnJavascriptComponent},
  { path: "qn-angular", component: QnAngularComponent},
  { path: "qn-react", component: QnReactComponent},
  { path: "qn-typescript", component: QnTypescriptComponent},
  { path: "qn-php", component: QnPhpComponent},
  { path: "qn-jsx", component: QnJsxComponent},
  { path: "admin-home", component: AdminHomeComponent},
  // { path : "admin-dashboard", component: AdminDashboardComponent, canActivate: [AuthGuard]},
  { path : "admin-dashboard", component: AdminDashboardComponent},
  { path : "admin-category", component: AdminCategoryComponent},
  { path : "student-home", component: StudentHomeComponent},
  // { path : "student-dashboard", component: StudentDashboardComponent},
  { path : "student-dashboard", component: StudentDashboardComponent },
  { path : "admin-add-qn", component: AdminAddQnComponent},
  { path : "student-signin", component: StudentSigninComponent},
  { path : "admin-add-student", component: AdminAddStudentComponent},
  { path : "admin-block", component: AdminBlockComponent},
  { path : "admin-profile", component: AdminProfileComponent},
  { path : "admin-manage", component: AdminManageComponent},
  { path : "admin-setting", component:AdminSettingComponent},
  { path : "student-course", component: StudentCourseComponent},
  { path : "student-rank", component : StudentRankComponent},
  { path : "student-quiz", component : StudentQuizComponent},
  { path : "student-setting", component : StudentSettingComponent},

  
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
