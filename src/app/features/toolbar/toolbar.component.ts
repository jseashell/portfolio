import { AsyncPipe, NgClass } from '@angular/common';
import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { BehaviorSubject, filter, switchMap, tap, timer } from 'rxjs';
import { ToolbarSubtitleService } from './toolbar-subtitle.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [AsyncPipe, MatButtonModule, MatCardModule, MatIconModule, NgClass, RouterModule],
  providers: [ToolbarSubtitleService],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent implements OnInit {
  @HostBinding('class.expanded') expanded!: boolean;
  @HostBinding('class.collapsed') collapsed!: boolean;
  private router = inject(Router);

  navColors = {
    home: 'primary',
    offerings: 'primary',
    portfolio: 'primary',
    askAQuestion: 'primary',
  };

  private toolbarSubtitleService = inject(ToolbarSubtitleService);
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
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        tap(() => {
          this.expanded = this.router.url == '/home' || this.router.url == '/';
          this.collapsed = !this.expanded;
        }),
      )
      .subscribe();

    timer(1200)
      .pipe(
        switchMap(() => this.toolbarSubtitleService.typewriter$(this.subtitles)),
        tap((subtitle: string) => {
          this.subtitle$.next(subtitle);
        }),
      )
      .subscribe();
  }
}
