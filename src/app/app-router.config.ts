import { Routes } from '@angular/router';
import { HomeComponent, PrivacyComponent, TermsComponent } from '@app/pages';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
