import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable } from 'rxjs';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { ServicesCard } from './shop.interface';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [AsyncPipe, MatCardModule, MatGridListModule, MatTabsModule, ShopCardComponent],
  providers: [DeviceDetectorService, ShopService],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css',
})
export class ShopComponent implements OnInit {
  private servicesService = inject(ShopService);
  private deviceService = inject(DeviceDetectorService);
  cards$!: Observable<ServicesCard[]>;
  isMobile!: boolean;

  ngOnInit(): void {
    this.cards$ = this.servicesService.cards$;
    this.isMobile = this.deviceService.isMobile();
  }
}
