import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { ShopComponent } from './features/shop/shop.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'shop',
    component: ShopComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: 'ask-a-question',
    component: ShopComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
