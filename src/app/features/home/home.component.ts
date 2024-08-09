import { Component } from '@angular/core';

import { animate, style, transition, trigger } from '@angular/animations';
import { heroSlide, heroSlideTiming } from './hero-slide.animation';
import { HeroComponent } from './hero/hero.component';
import { WorkExpListComponent } from './work-exp-list/work-exp-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, WorkExpListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    heroSlide,
    trigger('fade', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate(`${heroSlideTiming}s ${2 * heroSlideTiming}s ease-in`, style({ opacity: '1' })),
      ]),
      transition(':leave', [
        style({ opacity: '1' }),
        animate(`${heroSlideTiming}s ${heroSlideTiming}s ease-out`, style({ opacity: '0' })),
      ]),
    ]),
  ],
})
export class HomeComponent {}
