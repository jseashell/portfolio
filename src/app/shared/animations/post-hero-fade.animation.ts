import { animate, style, transition, trigger } from '@angular/animations';
import { heroSlideTiming } from 'src/app/features/hero/hero-slide';

const postHeroTiming = heroSlideTiming + 0.3;
export const postHeroFade = trigger('postHeroFade', [
  transition(':enter', [
    style({ opacity: '0' }),
    animate(`${heroSlideTiming}s ${postHeroTiming}s ease-in`, style({ opacity: '1' })),
  ]),
  transition(':leave', [
    style({ opacity: '1' }),
    animate(`${heroSlideTiming}s ${postHeroTiming}s ease-out`, style({ opacity: '0' })),
  ]),
]);
