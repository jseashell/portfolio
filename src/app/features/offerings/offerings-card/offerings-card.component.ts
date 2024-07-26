import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { OfferingsCard } from '../offerings.interface';

@Component({
  selector: 'app-offerings-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './offerings-card.component.html',
  styleUrl: './offerings-card.component.css',
})
export class OfferingsCardComponent {
  @Input() data!: OfferingsCard;
}
