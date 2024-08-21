import { AsyncPipe, NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DesktopService } from '@app/shared/services';
import { ReplaySubject, switchMap, tap, timer } from 'rxjs';
import { heroSlide } from './hero-slide';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [AsyncPipe, MatCardModule, NgClass],
  providers: [HeroService, DesktopService],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  animations: [heroSlide],
})
export class HeroComponent implements OnInit {
  private desktopService = inject(DesktopService);
  isDesktop$ = this.desktopService.isDesktop$;

  private toolbarSubtitleService = inject(HeroService);
  subtitle$ = new ReplaySubject<string>(1);
  private subtitles = [
    'Software Engineer',
    'System Architect',
    'Solutions Expert',
    'Front-end Engineer',
    'Creative Thinker',
    'Integration Specialist',
    'Back-end Engineer',
    'Code Craftsman',
    'Fullstack Engineer',
  ];

  yearsExp = new Date().getFullYear() - 2016;

  ngOnInit(): void {
    const defaultCssDuration = 600;
    timer(1.5 * defaultCssDuration)
      .pipe(
        switchMap(() => this.toolbarSubtitleService.typewriter$(this.subtitles)),
        tap((subtitle: string) => {
          this.subtitle$.next(subtitle);
        }),
      )
      .subscribe();
  }
}
