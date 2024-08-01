import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-toolbar-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './toolbar-card.component.html',
  styleUrl: './toolbar-card.component.css',
})
export class ToolbarCardComponent {}
