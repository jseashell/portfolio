import { animate, style, transition, trigger } from '@angular/animations';

/**
 * Fades in the attached template
 *
 * @example
 * Component({
 *   ...
 *   animations: [Fade(800)]
 * })
 * export class MyComponent {
 *   @HostBinding('@fade') fade!: any;
 * }
 *
 * @param timing millis of the fade in
 * @returns
 */
export function Fade(timing: number) {
  return trigger('fade', [
    transition(':enter', [style({ opacity: '0' }), animate(`${timing}s ease-in`, style({ opacity: '1' }))]),
    transition(':leave', [style({ opacity: '1' }), animate(`${timing}s ease-out`, style({ opacity: '0' }))]),
  ]);
}

export enum FadeInState {
  VISIBLE = 'visible',
  HIDDEN = 'hidden',
}
