import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { ServicesComponent } from './features/services/services.component';

export enum Paths {
  EMPTY = '',
  HOME = 'home',
  SERVICES = 'services',
  NOT_FOUND = '**',
}

export const routes: Routes = [
  {
    path: Paths.EMPTY,
    component: HomeComponent,
  },
  {
    path: Paths.HOME,
    component: HomeComponent,
  },
  {
    path: Paths.SERVICES,
    component: ServicesComponent,
  },
  {
    // must be last
    path: Paths.NOT_FOUND,
    component: NotFoundComponent,
  },
];
