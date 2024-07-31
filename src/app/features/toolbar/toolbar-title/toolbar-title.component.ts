import { AsyncPipe, NgClass } from '@angular/common';
import { Component, HostBinding, inject, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BehaviorSubject, switchMap, tap, timer } from 'rxjs';
import { ToolbarTitleService } from './toolbar-title.service';

@Component({
  selector: 'app-toolbar-title',
  standalone: true,
  imports: [AsyncPipe, MatButtonModule, MatIconModule, NgClass, RouterModule],
  templateUrl: './toolbar-title.component.html',
  styleUrl: './toolbar-title.component.css',
})
export class ToolbarTitleComponent implements OnInit {
  @HostBinding('class.home') @Input() isHome!: boolean;
  private toolbarService = inject(ToolbarTitleService);
  isMobile = false;

  subtitle$ = new BehaviorSubject<string>('Software Developer');
  private subtitles = [
    'Freelancer',
    'System Architect',
    'Fullstack Engineer',
    'Solutions Expert',
    'App Innovator',
    'Software Specialist',
    'Creative Thinker',
    'Algorithmic Artist',
    'Integration Whisperer',
    'Code Craftsman',
  ];

  constructor(private deviceService: DeviceDetectorService) {}

  ngOnInit(): void {
    this.isMobile = this.deviceService.isMobile();

    timer(1200)
      .pipe(
        switchMap(() => this.toolbarService.typewriter$(this.subtitles)),
        tap((subtitle: string) => {
          this.subtitle$.next(subtitle);
        }),
      )
      .subscribe();
  }
}
