import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ServicesCard } from '../services.interface';

@Component({
  selector: 'app-services-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './services-card.component.html',
  styleUrl: './services-card.component.css',
})
export class ServicesCardComponent {
  @Input() data!: ServicesCard;
}
