import { Routes } from '@angular/router';
import { AppsComponent, HomeComponent, PrivacyComponent, TermsComponent } from '@app/pages';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'apps',
    component: AppsComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
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
