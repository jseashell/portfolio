import { AsyncPipe, DatePipe, NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { DesktopService } from '@app/shared/services';
import dayjs from 'dayjs';
import { WorkExpListItem } from './work-exp-list-item.interface';

@Component({
  selector: 'app-work-exp-list-item',
  standalone: true,
  imports: [AsyncPipe, DatePipe, MatButtonModule, NgClass, RouterLink],
  providers: [DesktopService],
  templateUrl: './work-exp-list-item.component.html',
  styleUrl: './work-exp-list-item.component.css',
})
export class WorkExpListItemComponent implements OnInit {
  @Input() data!: WorkExpListItem;

  duration!: string;
  isPresent!: boolean;

  ngOnInit(): void {
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
