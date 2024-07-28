u. import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './features/hero/hero.component';
import { OfferingsComponent } from './features/offerings/offerings.component';
import { ReviewsComponent } from './features/reviews/reviews.component';
import { WorkExpComponent } from './features/work-exp/work-exp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, MatCardModule, OfferingsComponent, ReviewsComponent, WorkExpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
