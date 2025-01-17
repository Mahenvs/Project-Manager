import { UtilService } from '@/src/app/shared/util.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-issues',
  imports: [],
  templateUrl: './list-issues.component.html',
  styleUrl: './list-issues.component.css'
})
export class ListIssuesComponent implements OnInit {

  listOfIssues: string[] = []
  constructor(private route: ActivatedRoute, private utilService: UtilService) {
    console.log("I have been called list of issye",);
    console.log(route.paramMap);
  }
  ngOnInit() {
    const heroId = this.route.snapshot.paramMap.get('id');
    console.log(heroId, this.route.snapshot);
    console.log(this.utilService.issue$.subscribe(data => {
      this.listOfIssues = data
      console.log(data)
    }
    ));

  }
}
