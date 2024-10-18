import { animate, style, transition, trigger } from '@angular/animations';
import { AsyncPipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { DesktopService } from '@app/shared/services';
import { ContactDialogComponent } from './features/contact-dialog/contact-dialog.component';
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
    MatGridListModule,
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
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate(`${heroSlideTiming}s ease-in`, style({ transform: 'translateY(0%)' })),
      ]),
    ]),
  ],
})
export class AppComponent {
  private desktopService = inject(DesktopService);
  isDesktop$ = this.desktopService.isDesktop$;

  private dialog = inject(MatDialog);

  openContactDialog(): void {
    this.dialog.open(ContactDialogComponent, {
      width: '70%',
    });
  }
}
