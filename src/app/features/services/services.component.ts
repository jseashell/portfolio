import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ServicesCardComponent } from './services-card/services-card.component';
import { ServicesCubeComponent } from './services-cube/services-cube.component';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [AsyncPipe, ServicesCardComponent, ServicesCubeComponent],
  providers: [DeviceDetectorService, ServicesService],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  cards = inject(ServicesService).cards;
  cardsArr = Object.values(this.cards);
}
