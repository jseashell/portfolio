import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { map, Observable } from 'rxjs';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [AsyncPipe, MatButtonModule, MatCardModule, MatIconModule],
  providers: [HeroService],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent implements OnInit {
  name = 'John';

  private heroService = inject(HeroService);
  private subtitles = [
    'Software Developer.',
    'System Architect.',
    'Creative Thinker.',
    'Fullstack Engineer.',
    'Solutions Expert.',
    'Problem Solver.',
  ];
  subtitle$!: Observable<string>;

  ngOnInit(): void {
    this.subtitle$ = this.heroService.typewriter$(this.subtitles).pipe(map((val) => val));
  }
}
