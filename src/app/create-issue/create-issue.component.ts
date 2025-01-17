import { UtilService } from '@/src/app/shared/util.service';
import { ChangeDetectorRef, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-issue',
  imports: [FormsModule],
  templateUrl: './create-issue.component.html',
  styleUrl: './create-issue.component.css'
})
export class CreateIssueComponent implements OnInit {

  @Output() issueCreated = new EventEmitter<string>();
  send() {
    this.issueCreated.emit(this.issue)
    this.utilService.setIssue(this.issue)
  }

  constructor(private cdr: ChangeDetectorRef, private utilService: UtilService) { }

  issue = ''
  ngOnInit() {
    // this.cdr.detectChanges(); // Forces change detection

    console.log("I have been called",);

  }
  getInput() {
    console.log(this.issue);
  }
}
