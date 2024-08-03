import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { map, Subscription, tap } from 'rxjs';

@Directive({
  selector: '[desktop]',
  standalone: true,
})
export class DesktopDirective implements OnInit, OnDestroy {
  private sub!: Subscription;

  constructor(
    private bo: BreakpointObserver,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}

  ngOnInit(): void {
    this.sub = this.bo
      .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge, Breakpoints.Web, Breakpoints.Tablet])
      .pipe(
        map((state) => state.matches),
        tap((isDesktop) => {
          this.viewContainer.clear();
          if (isDesktop) {
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
