import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { OfferingsCardComponent } from './offerings-card/offerings-card.component';
import { OfferingsCubeComponent } from './offerings-cube/offerings-cube.component';
import { OfferingsService } from './offerings.service';

@Component({
  selector: 'app-offerings',
  standalone: true,
  imports: [AsyncPipe, OfferingsCardComponent, OfferingsCubeComponent],
  providers: [DeviceDetectorService, OfferingsService],
  templateUrl: './offerings.component.html',
  styleUrl: './offerings.component.css',
})
export class OfferingsComponent {
  cards = inject(OfferingsService).cards;
  cardsArr = Object.values(this.cards);
}
