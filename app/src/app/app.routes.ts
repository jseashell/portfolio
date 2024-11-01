import { Routes } from '@angular/router';
import { ContactDialogComponent } from './features/contact-dialog/contact-dialog.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactDialogComponent,
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
