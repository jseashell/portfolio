import { animate, style, transition, trigger } from '@angular/animations';

export const heroSlideTiming = 0.8;

export const heroSlide = trigger('heroSlide', [
  transition(':enter', [
    style({ transform: 'translateY(-100%)' }),
    animate(`${heroSlideTiming}s .3s ease-in`, style({ transform: 'translateY(0%)' })),
  ]),
  transition(':leave', [
    style({ transform: 'translateY(0%)' }),
    animate(`${heroSlideTiming}s .25s ease-out`, style({ transform: 'translateY(-100%)' })),
  ]),
]);
