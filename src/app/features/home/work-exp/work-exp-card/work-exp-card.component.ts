import { AsyncPipe, DatePipe, NgClass } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MobileObserver } from '@providers';
import dayjs from 'dayjs';
import { Observable } from 'rxjs';
import { WorkExpCard } from './work-exp-card.interface';

@Component({
  selector: 'app-work-exp-card',
  standalone: true,
  imports: [AsyncPipe, DatePipe, MatCardModule, MatDividerModule, NgClass],
  providers: [MobileObserver],
  templateUrl: './work-exp-card.component.html',
  styleUrl: './work-exp-card.component.css',
})
export class WorkExpCardComponent implements OnInit {
  @Input() data!: WorkExpCard;

  duration!: string;
  isPresent!: boolean;

  private mobile = inject(MobileObserver);
  isMobile$!: Observable<boolean>;

  ngOnInit(): void {
    this.isMobile$ = this.mobile.observe$;

    const startDayjs = dayjs(this.data.startDate);
    const endDayjs = dayjs(this.data.endDate);

    this.isPresent = endDayjs.isSame(dayjs(), 'month');

    const numMonths = endDayjs.diff(startDayjs, 'months');
    if (numMonths > 0) {
      const numYears = Math.floor(numMonths / 12);
      const remainingMonths = numMonths % 12;

      if (numYears === 0) {
        this.duration = remainingMonths + ' mos';
      } else if (remainingMonths === 0) {
        this.duration = numYears + ' yrs';
      } else {
        this.duration = numYears + ' yrs ' + remainingMonths + ' mos';
      }
    }
  }
}
