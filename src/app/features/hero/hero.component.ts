import { animate, style, transition, trigger } from '@angular/animations';
import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { BehaviorSubject, switchMap, tap, timer } from 'rxjs';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [AsyncPipe, MatCardModule],
  providers: [HeroService],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: '0', transform: 'translateY(100%)' }),
        animate('.8s ease-in', style({ opacity: '1', transform: 'translateY(0%)' })),
      ]),
      transition(':leave', [
        style({ opacity: '1', transform: 'translateY(0%)' }),
        animate('.8s ease-out', style({ opacity: '0', transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class HeroComponent implements OnInit {
  private toolbarSubtitleService = inject(HeroService);
  subtitle$ = new BehaviorSubject<string>('Software Engineer');
  private subtitles = [
    'Freelancer Developer',
    'System Architect',
    'Fullstack Engineer',
    'Solutions Expert',
    'Creative Thinker',
    'Integration Whisperer',
    'Software Specialist',
    'Algorithmic Artist',
    'Code Craftsman',
  ];

  ngOnInit(): void {
    const defaultCssDuration = 800;
    timer(2 * defaultCssDuration)
      .pipe(
        switchMap(() => this.toolbarSubtitleService.typewriter$(this.subtitles)),
        tap((subtitle: string) => {
          this.subtitle$.next(subtitle);
        }),
      )
      .subscribe();
  }
}
