import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { map, Subscription, tap } from 'rxjs';

@Directive({
  selector: '[mobile]',
})
export class MobileDirective implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private bo: BreakpointObserver,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}

  ngOnInit(): void {
    this.sub = this.bo
      .observe([Breakpoints.Small, Breakpoints.XSmall, Breakpoints.Tablet, Breakpoints.Handset])
      .pipe(
        map((state) => state.matches),
        tap((isMobile) => {
          this.viewContainer.clear();
          if (isMobile) {
            this.viewContainer.createEmbeddedView(this.templateRef);
          }
        }),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
