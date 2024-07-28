import { AsyncPipe } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Observable, map } from 'rxjs';
import { OfferingsCardComponent } from './offerings-card/offerings-card.component';
import { OfferingsCard } from './offerings.interface';
import { OfferingsService } from './offerings.service';

@Component({
  selector: 'app-offerings',
  standalone: true,
  imports: [AsyncPipe, MatCardModule, MatGridListModule, OfferingsCardComponent],
  providers: [BreakpointObserver, OfferingsService],
  templateUrl: './offerings.component.html',
  styleUrl: './offerings.component.css',
})
export class OfferingsComponent implements OnInit {
  private offeringsService = inject(OfferingsService);
  cards$!: Observable<OfferingsCard[]>;
  isMobile$!: Observable<boolean>;
  
  constructor(private bo: BreakpointObserver) {}

  ngOnInit(): void {
    this.cards$ = this.offeringsService.cards$;
    this.isMobile$ = this.bo.observe('(max-width: 768px)').pipe(map(state => state.matches));
  }
}
