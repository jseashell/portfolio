import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable } from 'rxjs';
import { OfferingsCardComponent } from './offerings-card/offerings-card.component';
import { OfferingsCard } from './offerings.interface';
import { OfferingsService } from './offerings.service';

@Component({
  selector: 'app-offerings',
  standalone: true,
  imports: [AsyncPipe, MatCardModule, MatGridListModule, MatTabsModule, OfferingsCardComponent],
  providers: [DeviceDetectorService, OfferingsService],
  templateUrl: './offerings.component.html',
  styleUrl: './offerings.component.css',
})
export class OfferingsComponent implements OnInit {
  private offeringsService = inject(OfferingsService);
  cards$!: Observable<OfferingsCard[]>;
  isMobile!: boolean;

  constructor(private deviceService: DeviceDetectorService) {}

  ngOnInit(): void {
    this.cards$ = this.offeringsService.cards$;
    this.isMobile = this.deviceService.isMobile();
  }
}
