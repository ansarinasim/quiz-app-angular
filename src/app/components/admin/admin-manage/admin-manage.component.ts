import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../admin.service';
import { Student } from '../../../student';

@Component({
  selector: 'app-admin-manage',
  templateUrl: './admin-manage.component.html',
  styleUrls: ['./admin-manage.component.css']
})
export class AdminManageComponent implements OnInit {

  student:any;
  constructor(private adminService: AdminService,) { }

  ngOnInit(): void {
    this.adminService.getStudent()
    .subscribe((data: Student[]) => {
      this.student = data;
    });
  }
  delete(student: Student): void{
    console.log(this.student.id)
    this.adminService.deleteStudent(student.id)
      .subscribe((data: any) => {
        this.student= this.student.filter((u: Student) => u !== this.student);
      });
  }
  update() {
    console.log('update');
  }

}
