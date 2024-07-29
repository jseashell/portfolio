import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { ShopCubeComponent } from './shop-cube/shop-cube.component';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [AsyncPipe, ShopCardComponent, ShopCubeComponent],
  providers: [DeviceDetectorService, ShopService],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent {
  cards = inject(ShopService).cards;
  cardsArr = Object.values(this.cards);
}
