import {
  AboutComponent,
  ContactComponent,
  ExperienceModule,
  PortfolioComponent,
} from './page';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ExperienceModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
