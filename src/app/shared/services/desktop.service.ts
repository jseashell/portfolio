import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable()
export class DesktopService {
  private bo = inject(BreakpointObserver);

  get isDesktop$(): Observable<boolean> {
    return this.bo
      .observe([Breakpoints.Web, Breakpoints.Large, Breakpoints.XLarge])
      .pipe(map((state) => state.matches));
  }
}
