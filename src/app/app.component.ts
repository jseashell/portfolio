import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, map, Observable } from 'rxjs';
import { ToolbarComponent } from './features/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, RouterOutlet, ToolbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private router = inject(Router);
  isHome$!: Observable<boolean>;

  ngOnInit(): void {
    this.isHome$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.router.url == '/home' || this.router.url == '/'),
    );
  }
}
