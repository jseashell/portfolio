import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-toolbar-nav',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './toolbar-nav.component.html',
  styleUrl: './toolbar-nav.component.css',
})
export class ToolbarNavComponent implements OnInit {
  @HostBinding('class.home') home!: boolean;
  private router = inject(Router);

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        tap(() => {
          this.home = this.router.url == '/home' || this.router.url == '/';
        }),
      )
      .subscribe();
  }
}
