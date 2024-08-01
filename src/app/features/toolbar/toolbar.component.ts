import { NgClass } from '@angular/common';
import { Component, HostBinding, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, tap } from 'rxjs';
import { ToolbarCardComponent } from './toolbar-card/toolbar-card.component';
import { ToolbarNavComponent } from './toolbar-nav/toolbar-nav.component';
import { ToolbarTitleComponent } from './toolbar-title/toolbar-title.component';
import { ToolbarTitleService } from './toolbar-title/toolbar-title.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    NgClass,
    RouterModule,
    ToolbarCardComponent,
    ToolbarNavComponent,
    ToolbarTitleComponent,
  ],
  providers: [ToolbarTitleService],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent implements OnInit {
  @HostBinding('class.expanded') expanded!: boolean;
  @HostBinding('class.collapsed') collapsed!: boolean;
  private router = inject(Router);

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
  }
}
