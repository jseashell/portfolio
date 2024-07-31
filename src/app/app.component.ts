import { AsyncPipe } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, Subscription, tap } from 'rxjs';
import { ToolbarComponent } from './features/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, RouterOutlet, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);
  isHome = false;

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.router.url == '/home' || this.router.url == '/'),
        tap((isHome) => {
          this.isHome = isHome;
          console.log(`This is ${isHome ? 'home' : 'not home'}`);
          this.cdr.detectChanges();
        }),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subs?.forEach((sub) => sub?.unsubscribe());
  }
}
