import { Routes } from '@angular/router';
import { DesignComponent } from './components/design/design';

export const routes: Routes = [
  { path: 'design', component: DesignComponent },
  { path: '**', redirectTo: '' },
];
