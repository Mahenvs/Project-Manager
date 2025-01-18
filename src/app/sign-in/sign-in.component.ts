import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit {

  userName: string = ''
  userPswd: string = ''
  gender = 'male'
  submitted = false
  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);

    })
    this.route.queryParamMap.subscribe((params) => {
      console.log(params);

    })
  }
  submitHandler(data: any) {
    this.submitted = true;
    console.log(data.value);

    this.router.navigate(['home'])
  }
}
