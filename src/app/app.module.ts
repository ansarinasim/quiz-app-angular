import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/student/home/home.component';
import { QuestionComponent } from './components/questions/question/question.component';
import { HeaderComponent } from './components/student/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ChangeBgDirective } from './change-bg.directive';
import { QnHtmlComponent } from './components/questions/qn-html/qn-html.component';
import { QnCssComponent } from './components/questions/qn-css/qn-css.component';
import { QnJavascriptComponent } from './components/questions/qn-javascript/qn-javascript.component';
import { QnAngularComponent } from './components/questions/qn-angular/qn-angular.component';
import { QnReactComponent } from './components/questions/qn-react/qn-react.component';
import { QnPhpComponent } from './components/questions/qn-php/qn-php.component';
import { QnTypescriptComponent } from './components/questions/qn-typescript/qn-typescript.component';
import { QnJsxComponent } from './components/questions/qn-jsx/qn-jsx.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { StudentHomeComponent } from './components/student/student-home/student-home.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';
import { AdminAddQnComponent } from './components/admin/admin-add-qn/admin-add-qn.component';
import { StudentSigninComponent } from './components/student/student-signin/student-signin.component';
import { AdminAddStudentComponent } from './components/admin/admin-add-student/admin-add-student.component';
import { AdminBlockComponent } from './components/admin/admin-block/admin-block.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { AdminManageComponent } from './components/admin/admin-manage/admin-manage.component';
import { AdminSettingComponent } from './components/admin/admin-setting/admin-setting.component';
import { FooterComponent } from './components/student/footer/footer.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { AdminSidebarComponent } from './components/admin/admin-sidebar/admin-sidebar.component';
import { StudentCourseComponent } from './components/student/student-course/student-course.component';
import { AdminCategoryComponent } from './components/admin/admin-category/admin-category.component';
import { StudentRankComponent } from './components/student/student-rank/student-rank.component';
import { StudentQuizComponent } from './components/student/student-quiz/student-quiz.component';
import { StudentSettingComponent } from './components/student/student-setting/student-setting.component';
import { UserHeaderComponent } from './components/student/user-header/user-header.component';
import { StudentSidebarComponent } from './components/student/student-sidebar/student-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionComponent,
    HeaderComponent,
    ChangeBgDirective,
    QnHtmlComponent,
    QnCssComponent,
    QnJavascriptComponent,
    QnAngularComponent,
    QnReactComponent,
    QnPhpComponent,
    QnTypescriptComponent,
    QnJsxComponent,
    AdminHomeComponent,
    StudentHomeComponent,
    AdminDashboardComponent,
    StudentDashboardComponent,
    AdminAddQnComponent,
    StudentSigninComponent,
    AdminAddStudentComponent,
    AdminBlockComponent,
    AdminProfileComponent,
    AdminManageComponent,
    AdminSettingComponent,
    FooterComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    StudentCourseComponent,
    AdminCategoryComponent,
    StudentRankComponent,
    StudentQuizComponent,
    StudentSettingComponent,
    UserHeaderComponent,
    StudentSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
