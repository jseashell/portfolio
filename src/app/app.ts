import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly year = new Date().getFullYear();
  isHome = signal(false);

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
  ) {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../icons/github.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'linkedin',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../icons/linkedin.svg'),
    );
    this.matIconRegistry.addSvgIcon(
      'vscode',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../icons/vscode.svg'),
    );

    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        tap((e) => {
          const url = e.urlAfterRedirects.split('#')[0];
          this.isHome.set(url === '/' || url.includes('/home'));
          console.debug('NavigationEnd', { home: this.isHome() });
        }),
      )
      .subscribe();
  }
}
