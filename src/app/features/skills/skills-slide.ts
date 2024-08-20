import { animate, style, transition, trigger } from '@angular/animations';
import { heroSlideTiming } from '../hero/hero-slide';

export const skillsSlide = trigger('skillsSlide', [
  transition(':enter', [
    style({ transform: 'translateY(-100%)' }),
    animate(`${heroSlideTiming}s ${2 * heroSlideTiming}s ease-in`, style({ transform: 'translateY(0%)' })),
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0%)' }),
    animate(`${heroSlideTiming}s ease-out`, style({ transform: 'translateY(-100%)' })),
  ]),
]);
