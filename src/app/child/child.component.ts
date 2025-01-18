import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
  @Input()
  title1!: string;
  ngOnInit() {
    console.log(this.title1);


  }

}
