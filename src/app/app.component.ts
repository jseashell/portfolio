import { animate, style, transition, trigger } from '@angular/animations';
import { AsyncPipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { DesktopService } from '@app/shared/services';
import { filter, map, tap } from 'rxjs';
import { ContactComponent } from './features/contact/contact.component';
import { heroSlideTiming } from './features/hero/hero-slide';
import { HeroComponent } from './features/hero/hero.component';
import { postHeroFade } from './shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AsyncPipe,
    HeroComponent,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    NgClass,
    RouterModule,
  ],
  providers: [DesktopService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    postHeroFade,
    trigger('heroSlide', [
      // state('closed', style({ transform: 'translateY(-100%)' })),
      // state('opened', style({ transform: 'translateY(0%)' })),
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate(`${heroSlideTiming}s ease-in`, style({ transform: 'translateY(0%)' })),
      ]),
      // transition('opened -> closed', [
      //   style({ transform: 'translateY(0%)' }),
      //   animate(`${heroSlideTiming}s ease-out`, style({ transform: 'translateY(-100%)' })),
      // ]),
    ]),
  ],
})
export class AppComponent {
  private desktopService = inject(DesktopService);
  isDesktop$ = this.desktopService.isDesktop$;

  heroState: 'opened' | 'closed' = 'opened';
  private router = inject(Router);
  isHome$ = this.router.events.pipe(
    filter((e) => e instanceof NavigationEnd),
    map(() => {
      return this.router.url === '/home' || this.router.url === '/';
    }),
    tap((isHome) => {
      if (isHome) this.heroState = 'opened';
      else this.heroState = 'closed';
    }),
  );

  dialog = inject(MatDialog);

  openContactForm(): void {
    this.dialog.open(ContactComponent);
  }
}
