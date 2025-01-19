import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  url = "http://localhost:3000/studentData"
  constructor(private http: HttpClient) {

  }
  getStudents() {
    return this.http.get(this.url)
  }
  private issueSubject = new BehaviorSubject<string[]>([]);
  issue$ = this.issueSubject.asObservable();
  counter = signal(0)


  increment() {
    // return
  }
  decrement() {
    this.counter.update((previous) => previous - 1)
  }
  setIssue(issue: string) {
    const currentIssues = this.issueSubject.value
    this.issueSubject.next([...currentIssues, issue]); // Update the issue data
  }
}
