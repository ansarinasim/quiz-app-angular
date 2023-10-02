import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AdminService } from '../../../admin.service';
import { Router } from '@angular/router';
import { Category } from '../../../categoty';
import { ApiService } from '../../../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
@Component({
  selector: 'app-admin-add-qn',
  templateUrl: './admin-add-qn.component.html',
  styleUrls: ['./admin-add-qn.component.css']
})
export class AdminAddQnComponent implements OnInit {
  category: any;
  angForm: FormGroup;

  constructor(private adminservice: AdminService,
    private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router) {
      {
        this.angForm = this.fb.group({
          questionText: ['', Validators.required],
          options:{
            text: ['', Validators.required],
            correct: ['', Validators.required],
          } ,
          text: ['', [Validators.required,Validators.minLength(1), Validators.email]],
          correct: ['', Validators.required],
          cat_id: ['', Validators.required],
          cat_name: ['', Validators.required],
          explanation: ['', Validators.required],
  
        });
       }
     }

  ngOnInit(): void {
    this.adminservice.getCategory()
    .subscribe((data: any) => {
      this.category = data;
      console.log(data);
      console.log('bbb'+this.category);
    });
  }

  postdata(angForm:any)
    {
      this.dataService.postQuestion(
        angForm.value.questionText,
        angForm.value.options,
        angForm.value.text,
        angForm.value.correct,
        angForm.value.cat_id,
        angForm.value.cat_name,
        angForm.value.explanation,
      )
      .pipe(first())
      .subscribe( data => {
        this.router.navigate(['admin-dashboard']);
      },
      error => {
      });
    }

}
