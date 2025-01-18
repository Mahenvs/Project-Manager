import { ChildComponent } from '@/src/app/child/child.component';
import { UtilService } from '@/src/app/shared/util.service';
import { Component, effect, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, ChildComponent, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  decrement() {
    this.utilService.counter.update((previous) => previous - 1)
  }
  reset() {
    this.utilService.counter.set(0)
  }
  increment() {
    this.utilService.counter.update((previous) => previous + 1)

  }
  constructor(public utilService: UtilService) {
    effect(() => {
      this.counterVal = this.utilService.counter();
    })
  }

  title = 'jiraClone';
  counterVal = 0
  child: string = ''
  childData(value: string) {
    this.child = value;

  };
  ngOnInit(): void {
    // Redirect with query parameters
    // this.router.navigate(['/auth'], { queryParams: { newUser: 'true' } });


  }

  @ViewChild(ChildComponent) _child!: ChildComponent;
  sendToChild(city: string) {
    console.log(city);

    const data = this._child.addCities(city)
    console.log("Data complete is ", data);

  }
}
