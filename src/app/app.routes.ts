import { Routes } from '@angular/router';
import { AskAQuestionComponent } from './features/ask-a-question/ask-a-question.component';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { OfferingsComponent } from './features/offerings/offerings.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'offerings',
    component: OfferingsComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'ask-a-question',
    component: AskAQuestionComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
