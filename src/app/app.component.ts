import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  constructor(private router: Router) { }
  title = 'jiraClone';
  ngOnInit(): void {
    // Redirect with query parameters
    // this.router.navigate(['/auth'], { queryParams: { newUser: 'true' } });
  }
}
