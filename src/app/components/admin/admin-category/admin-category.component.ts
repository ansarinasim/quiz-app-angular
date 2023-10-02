import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiService } from '../../../api.service';
@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder,
    private dataService: ApiService,
    private router: Router) { 
      this.angForm = this.fb.group({
        id: ['', Validators.required],
        cat_id: ['', Validators.required],
        cat_name: ['', [Validators.required,Validators.minLength(1), Validators.email]],
        // parent_id: ['', Validators.required],
        // cat_des: ['', Validators.required],

      });
    }

  ngOnInit(): void {
  }

  postdata(angForm:any)
    {
      this.dataService.questioncategory(
        angForm.value.id,
        angForm.value.cat_id,
        angForm.value.cat_name,
        // angForm.value.parent_id,
        // angForm.value.cat_des,
      )
      .pipe(first())
      .subscribe( data => {
        this.router.navigate(['admin-add-qn']);
      },
      error => {
      });
    }
}
