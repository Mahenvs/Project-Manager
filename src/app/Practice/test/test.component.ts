import { ChildComponent } from '@/src/app/child/child.component';
import { Student, User } from '@/src/app/models/models';
import { UtilService } from '@/src/app/shared/util.service';
import { provideHttpClient } from '@angular/common/http';
import { Component, computed, effect, importProvidersFrom, signal, ViewChild, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { filter, map } from 'rxjs';

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


  @ViewChild(ChildComponent) _child!: ChildComponent;
  sendToChild(city: string) {
    console.log(city);

    const data = this._child.addCities(city)
    console.log("Data complete is ", data);

  }


  // Adding users using computed signals
  listOfUsers: WritableSignal<User[]> = signal([])
  usersLength = computed(() => {
    return this.listOfUsers().length
  })

  // addUser(user: string) {
  //   this.listOfUsers.update(prev => [...prev, { id: this.listOfUsers().length + 1, name: user }])
  // }

  // we can make use of the computed signal to make any operations as here we are getting the id of each user from computed signal
  addUser(user: string) {
    // This computed signal is readonly, meaning it doesn't provide updated,set and mutate methods on it which signal provides which is Writable Signal
    this.listOfUsers.update(prev => [...prev, { id: this.usersLength() + 1, name: user }])
  }


  // Observables
  listOfStudents: Student[] = []
  ngOnInit(): void {
    // Redirect with query parameters
    // this.router.navigate(['/auth'], { queryParams: { newUser: 'true' } });
    this.utilService.getStudents()
      .pipe(
        map((response: any) => response.filter((stude: any) => {
          return stude.age > 21
        })))
      //   response.map((stud: any) => {
      //     console.log('Original:', stud);
      //     return { ...stud, name: stud.name + ' CSE' }; // Increment age by 1
      //   })))

      .subscribe(student => {
        this.listOfStudents = student
      })
  }
}
