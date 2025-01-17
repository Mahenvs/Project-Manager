import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) { }
  id = 2
  ngOnInit() {
    // this.data = 'New data';
    this.cdr.detectChanges(); // Forces change detection
  }
}
