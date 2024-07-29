import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ServicesCard } from '../shop.interface';

@Component({
  selector: 'app-shop-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './shop-card.component.html',
  styleUrl: './shop-card.component.css',
})
export class ShopCardComponent {
  @Input() data!: ServicesCard;
}
