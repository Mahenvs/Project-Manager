import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private issueSubject = new BehaviorSubject<string[]>([]);
  issue$ = this.issueSubject.asObservable();
  constructor() {

  }

  setIssue(issue: string) {
    const currentIssues = this.issueSubject.value
    this.issueSubject.next([...currentIssues, issue]); // Update the issue data
  }
}
