import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { postHeroFade } from '@app/shared/animations';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [MatButtonModule, MatChipsModule, MatIconModule, MatTabsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  animations: [postHeroFade],
})
export class PortfolioComponent {}
