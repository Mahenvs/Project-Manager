import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

  userName: string = ''
  userPswd: string = ''
  gender = 'male'
  submitted = false
  constructor(private route: Router) { }
  submitHandler(data: any) {
    this.submitted = true;
    console.log(data.value);

    this.route.navigate(['home'])
  }
}
