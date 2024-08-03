import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable()
export class MobileObserver {
  private bo = inject(BreakpointObserver);

  get observe$(): Observable<boolean> {
    return this.bo
      .observe([Breakpoints.Small, Breakpoints.XSmall, Breakpoints.HandsetPortrait])
      .pipe(map((state) => state.matches));
  }
}
