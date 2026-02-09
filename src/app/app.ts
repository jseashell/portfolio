import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutComponent, ContactComponent, ProjectsComponent } from '@app/features';
import { ReplaySubject, switchMap, tap, timer } from 'rxjs';
import { TypewriterService } from './common/services';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AboutComponent, ContactComponent, ProjectsComponent, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  readonly year = new Date().getFullYear();

  private toolbarSubtitleService = inject(TypewriterService);
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
