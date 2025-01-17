import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AuthComponent } from '@/src/app/auth/auth.component';
import { CreateIssueComponent } from '@/src/app/create-issue/create-issue.component';
import { ListIssuesComponent } from '@/src/app/list-issues/list-issues.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AuthComponent
  }, {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'create-issue',

        component: CreateIssueComponent,
      }
      //, {
      //   path: 'list-issues',
      //   // title: 'resolvedChildATitle1',
      //   component: ListIssuesComponent,
      // }
      ,
      {
        path: 'list-issues/:id',
        // title: 'resolvedChildATitle1',
        component: ListIssuesComponent,
      }
    ]
  }
];
