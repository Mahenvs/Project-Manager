import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


import { CreateIssueComponent } from '@/src/app/create-issue/create-issue.component';
import { ListIssuesComponent } from '@/src/app/list-issues/list-issues.component';
import { SignInComponent } from '@/src/app/sign-in/sign-in.component';
import { SignUpComponent } from '@/src/app/sign-up/sign-up.component';
import { TestComponent } from '@/src/app/Practice/test/test.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'test',
    pathMatch: 'full'
  },
  {
    path: 'auth/login',
    component: SignInComponent
  },
  {
    path: 'auth/register',
    component: SignUpComponent
  }, {
    path: 'test',
    component: TestComponent
  },
  {
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
