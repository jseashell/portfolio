import { Routes } from '@angular/router';
import { HomeComponent, PortfolioComponent, PrivacyComponent, TermsComponent } from '@app/pages';
import { ExperienceComponent } from './components';
import { ServicesComponent } from './pages/services/services';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'experience',
    component: ExperienceComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'terms',
    component: TermsComponent,
  },
  {
    // This route should always be the very last route.
    // It will catch any non-matching endpoints and redirect to /home.
    path: '**',
    pathMatch: 'full',
    redirectTo: '/home',
  },
];
