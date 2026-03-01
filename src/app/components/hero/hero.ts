import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TypewriterService } from '@app/common/services';
import { ReplaySubject, switchMap, tap, timer } from 'rxjs';
import { FadeInOnScrollDirective } from '@app/common/directives';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FadeInOnScrollDirective],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
})
export class HeroComponent implements OnInit {
  #typewriter = inject(TypewriterService);
  subtitle$ = new ReplaySubject<string>(1);

  /**
   * Subtitles to rotate through on the home page.
   * - "I am a" is always present in code so that it remains static.
   * - spacing here accounts for "an".
   * - a period purposefully exists at the end so that it, too, is included in the {@link #typewriter}.
   * */
  #subtitles = [
    { label: 'Software Engineer', allowMobile: true },
    { label: 'System Architect', allowMobile: true },
    { label: 'Integration Specialist', allowMobile: false },
    { label: 'Full Stack Engineer', allowMobile: false },
    { label: 'Solutions Expert', allowMobile: true },
    { label: 'Creative Thinker', allowMobile: true },
    { label: 'Design Thinker', allowMobile: true },
    { label: 'Strategic Troubleshooter', allowMobile: false },
    { label: 'Problem Solver', allowMobile: true },
    { label: 'Code Craftsman', allowMobile: true },
    { label: 'Interface Specialist', allowMobile: false },
    { label: 'Tech Professional', allowMobile: true },
    { label: 'Experience Builder', allowMobile: false },
    { label: 'Project Leader', allowMobile: true },
  ];

  #firstEmployeedYear = 2016;
  yearsExp = new Date().getFullYear() - this.#firstEmployeedYear;

  /**
   * Detects if the current device is a mobile device using the user agent string.
   */
  isMobileDevice(): boolean {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;
    return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  }

  ngOnInit(): void {
    const defaultCssDuration = 600;
    timer(1.5 * defaultCssDuration)
      .pipe(
        switchMap(() => {
          const isMobile = this.isMobileDevice();
          const subList = this.#subtitles
            .filter((s) => (isMobile ? s.allowMobile : true))
            .map((s) => s.label);
          return this.#typewriter.typewriter$(subList);
        }),
        tap((subtitle: string) => {
          this.subtitle$.next(subtitle);
        }),
      )
      .subscribe();
  }
}
