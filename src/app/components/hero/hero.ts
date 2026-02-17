import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NAME } from '@app/common/constants/application-constants';
import { TypewriterService } from '@app/common/services';
import { ReplaySubject, switchMap, tap, timer } from 'rxjs';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
})
export class HeroComponent implements OnInit {
  name = NAME;

  #typewriter = inject(TypewriterService);
  subtitle$ = new ReplaySubject<string>(1);

  /**
   * Subtitles to rotate through on the home page.
   * - "I am a" is always present in code so that it remains static.
   * - spacing here accounts for "an".
   * - a period purposefully exists at the end so that it, too, is included in the {@link #typewriter}.
   * */
  #subtitles = [
    ' Software Engineer.',
    ' System Architect.',
    'n Integration Specialist.',
    ' Full Stack Engineer.',
    ' Solutions Expert.',
    ' Creative Thinker.',
    ' Design Thinker.',
    ' Strategic Troubleshooter.',
    ' Problem Solver',
    ' Code Craftsman.',
    'n Interface Specialist.',
    ' Fullstack Engineer.',
    ' Tech Professional',
    'n Experience Builder.',
    ' Project Leader.',
  ];

  #firstEmployeedYear = 2016;
  yearsExp = new Date().getFullYear() - this.#firstEmployeedYear;

  ngOnInit(): void {
    const defaultCssDuration = 600;
    timer(1.5 * defaultCssDuration)
      .pipe(
        switchMap(() => this.#typewriter.typewriter$(this.#subtitles)),
        tap((subtitle: string) => {
          this.subtitle$.next(subtitle);
        }),
      )
      .subscribe();
  }
}
