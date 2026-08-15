import { Routes } from '@angular/router';
import { HomeComponent, PrivacyComponent, TermsComponent } from '@app/pages';
import { ExperienceComponent } from './components';
import { SkillsComponent } from './pages/skills/skills';

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
    path: 'privacy',
    component: PrivacyComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
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
