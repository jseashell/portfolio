import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { WorkExpComponent } from './features/work-exp/work-exp.component';

export enum Path {
  EMPTY = '',
  HOME = 'home',
  PORTFOLIO = 'portfolio',
  WORK_EXP = 'experience',
}

export const routes: Routes = [
  { path: Path.EMPTY, pathMatch: 'full', redirectTo: Path.HOME },
  {
    path: Path.HOME,
    component: HomeComponent,
  },
  {
    path: Path.PORTFOLIO,
    component: PortfolioComponent,
  },
  {
    path: Path.WORK_EXP,
    component: WorkExpComponent,
  },
  { path: '**', redirectTo: Path.HOME },
];
