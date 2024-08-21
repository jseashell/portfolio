import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { WorkExpComponent } from './features/work-exp/work-exp.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'experience',
    component: WorkExpComponent,
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
