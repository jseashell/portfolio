import { animate, state, style, transition, trigger } from '@angular/animations';
import { AsyncPipe, NgClass } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
import { MobileObserver } from '@providers';
import { filter, Observable, tap } from 'rxjs';
import { Paths } from './app.routes';
import { HeroComponent } from './features/hero/hero.component';
import { NavComponent } from './features/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, HeroComponent, NavComponent, NgClass, RouterOutlet, RouterModule],
  providers: [MobileObserver],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('headerAnim', [
      state('hidden', style({ opacity: '0', transform: 'translateY(-100%)' })),
      state('visible', style({ opacity: '1', transform: 'translateY(0%)' })),
      transition('hidden -> visible', [
        animate('.8s .8s ease-in', style({ opacity: '1', transform: 'translateY(0%)' })),
      ]),
      transition('visible -> hidden', [
        animate('.8s ease-out', style({ opacity: '0', transform: 'translateY(-100%)' })),
      ]),
    ]),
    trigger('heroAnim', [
      state('hidden', style({ opacity: '0', transform: 'translateY(-100%)' })),
      state('visible', style({ opacity: '1', transform: 'translateY(0%)' })),
      transition('hidden -> visible', [animate('.8s ease-in', style({ opacity: '1', transform: 'translateY(0%)' }))]),
      transition('visible -> hidden', [
        animate('.8s ease-out', style({ opacity: '0', transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit, AfterViewInit {
  headerState: 'visible' | 'hidden' = 'hidden';
  heroState: 'visible' | 'hidden' = 'hidden';
  private router = inject(Router);

  private mobile = inject(MobileObserver);
  isMobile$!: Observable<boolean>;

  ngOnInit(): void {
    this.isMobile$ = this.mobile.observe$;
  }

  ngAfterViewInit(): void {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        tap(() => {
          const url = this.router.url.substring(1); // remove leading / to match Paths enum
          if (url == Paths.HOME || url == Paths.EMPTY) this.heroState = 'visible';
          else this.heroState = 'hidden';

          if (url == Paths.NOT_FOUND) this.headerState = 'hidden';
          else this.headerState = 'visible';
        }),
      )
      .subscribe();
  }
}
