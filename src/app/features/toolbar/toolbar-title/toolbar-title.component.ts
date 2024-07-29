import { AsyncPipe } from '@angular/common';
import { Component, HostBinding, inject, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ToolbarTitleService } from './toolbar-title.service';

@Component({
  selector: 'app-toolbar-title',
  standalone: true,
  imports: [AsyncPipe, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './toolbar-title.component.html',
  styleUrl: './toolbar-title.component.css',
})
export class ToolbarTitleComponent implements OnInit {
  @HostBinding('class.home') @Input() isHome: boolean | null = false;
  private toolbarService = inject(ToolbarTitleService);

  // longest subtitle is 12rem
  private subtitles = [
    'Software Developer',
    'Freelancer',
    'System Architect',
    'Fullstack Engineer',
    'Solutions Expert',
    'App Innovator',
    'Software Specialist',
    'Code Maverick',
    'Algorithmic Artist',
    'Integration Whisperer',
    'Creative Thinker',
  ];
  subtitle$!: Observable<string>;

  ngOnInit(): void {
    this.subtitle$ = this.toolbarService.typewriter$(this.subtitles).pipe(map((val) => val));
  }
}
