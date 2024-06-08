import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SchoolComponent } from './pages/school/school.component';

export const routes: Routes = [
  {
    path: '',
    component: SigninComponent,
    title: 'Signin Page',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
  },
  {
    path: 'school',
    component: SchoolComponent,
    title: 'School',
  },
];
