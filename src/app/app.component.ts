import { animate, style, transition, trigger } from '@angular/animations';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterOutlet } from '@angular/router';
import { DesktopService } from '@app/shared/services';
import { heroSlide, heroSlideTiming } from './features/hero/hero-slide';
import { HeroComponent } from './features/hero/hero.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { WorkExpService } from './features/work-exp/work-exp-list.service';
import { WorkExpComponent } from './features/work-exp/work-exp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, HeroComponent, MatExpansionModule, WorkExpComponent, PortfolioComponent],
  providers: [DesktopService, WorkExpService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    heroSlide,
    trigger('fade', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate(`${heroSlideTiming}s ${2 * heroSlideTiming}s ease-in`, style({ opacity: '1' })),
      ]),
      transition(':leave', [style({ opacity: '1' }), animate(`${heroSlideTiming}s ease-out`, style({ opacity: '0' }))]),
    ]),
  ],
})
export class AppComponent {
  private desktopService = inject(DesktopService);
  isDesktop$ = this.desktopService.isDesktop$;

  private workExpService = inject(WorkExpService);
  data$ = this.workExpService.data$;
}
