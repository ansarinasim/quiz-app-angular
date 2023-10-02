import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../admin.service';
import { Student } from '../../../student';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-block',
  templateUrl: './admin-block.component.html',
  styleUrls: ['./admin-block.component.css']
})
export class AdminBlockComponent implements OnInit {
  student:any;
  constructor(private adminService: AdminService,) { }

  ngOnInit(): void {
    this.adminService.getStudent()
    .subscribe((data: Student[]) => {
      this.student = data;
    });
  }
  
  update() {
    console.log('update');
  }
}
