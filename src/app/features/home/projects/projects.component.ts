import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatButtonModule, MatChipsModule, MatIconModule, MatTabsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class PortfolioComponent {}
