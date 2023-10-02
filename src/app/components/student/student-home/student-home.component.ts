import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, AbstractControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionService } from '../../../service/question.service';
import { StudentService } from '../../../student.service';
import { Student } from '../../../student';
@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {
  complexForm : FormGroup;

  constructor(fb: FormBuilder,
    private _studentService: StudentService,
   private router: Router) {
    this.complexForm = fb.group({
      // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
      'f_name' : [null, Validators.required],
      // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
      'l_name': [null, Validators.compose([Validators.required])],
      'mobile':['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])],
      'email': ['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'confirm_password': ['', [Validators.required, Validators.minLength(6)]]
    })
   }

  ngOnInit(): void {
  }
      // All is this method
onPasswordChange() {
  if (this.confirm_password.value == this.password.value) {
    this.confirm_password.setErrors(null);
  } else {
    this.confirm_password.setErrors({ mismatch: true });
  }
}

// getting the form control elements
get password(): AbstractControl {
  return this.complexForm.controls['password'];
}

get confirm_password(): AbstractControl {
  return this.complexForm.controls['confirm_password'];
}


    submitForm(value: any){
      console.log(value);
    }


    onSubmit() {
      console.log(this.complexForm.value);
      this._studentService.createRegister(this.complexForm.value)
      .subscribe(() => {
        this.router.navigate(['student-login']);
      },
        )
  }
 
}
