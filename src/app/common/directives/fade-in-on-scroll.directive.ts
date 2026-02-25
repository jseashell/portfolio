import { Directive, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appFadeInOnScroll]',
})
export class FadeInOnScrollDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;

  constructor(
    private el: ElementRef<HTMLElement>,
    private zone: NgZone,
  ) {}

  ngOnInit(): void {
    this.el.nativeElement.classList.add('out-of-view');

    this.zone.runOutsideAngular(() => {
      const cb: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          // Only apply the class one time, aka only animate one time.
          const isInView = this.el.nativeElement.classList.contains('in-view');
          if (entry.isIntersecting && !isInView) {
            this.el.nativeElement.classList.add('in-view');
          }
        });
      };

      this.observer = new IntersectionObserver(cb, {
        // trigger the callback when at least 10% of the project is visible
        threshold: 10 / 100,
      });

      this.observer.observe(this.el.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
