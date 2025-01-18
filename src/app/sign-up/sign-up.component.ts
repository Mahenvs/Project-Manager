import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  signUpForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl(''),
    password: new FormControl(''),
    age: new FormControl(''),
    tags: new FormArray([]),
    gender: new FormControl('male')
  })
  test = new FormControl('x')
  onSubmit() {
    console.log(this.signUpForm.value);

    // throw new Error('Method not implemented.');
  }
  username = new FormControl('')
  ngOnInit(): void {
    this.test.setValue('sdi');

  }
}
