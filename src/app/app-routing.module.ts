import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { ExperienceComponent } from './page/experience/experience.component';
import { NgModule } from '@angular/core';
import { PortfolioComponent } from './page/portfolio/portfolio.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
