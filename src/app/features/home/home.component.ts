import { Component, inject } from '@angular/core';

import { animate, style, transition, trigger } from '@angular/animations';
import { AsyncPipe } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { heroSlide, heroSlideTiming } from './hero-slide.animation';
import { HeroComponent } from './hero/hero.component';
import { WorkExpService } from './work-exp-list.service';
import { WorkExpComponent } from './work-exp/work-exp.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, HeroComponent, MatExpansionModule, MatListModule, WorkExpComponent],
  providers: [WorkExpService],
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
export class HomeComponent {
  private workExpService = inject(WorkExpService);
  data$ = this.workExpService.data$;
}
