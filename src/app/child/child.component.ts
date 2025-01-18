import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
  @Input()
  title1!: string;

  @Output() setTitle = new EventEmitter<string>();
  ngOnInit() {
    console.log(this.title1);

  }

  sendToParent() {
    this.setTitle.emit("I am set from child")

  }
  cities: string[] = ['Hyd', "Mum"]

  addCities(city: string) {
    console.log(city);

    this.cities.push(city)
    console.log(this.cities);
    return this.cities
  }
}
