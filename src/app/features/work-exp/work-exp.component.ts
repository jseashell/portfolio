import { AsyncPipe, DatePipe, NgClass } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { DesktopService } from '@app/shared/services';
import dayjs from 'dayjs';
import { WorkExpService } from './work-exp-list.service';
import { WorkExpAttributes } from './work-exp.interface';

@Component({
  selector: 'app-work-exp',
  standalone: true,
  imports: [AsyncPipe, DatePipe, MatButtonModule, MatExpansionModule, NgClass, RouterLink],
  providers: [DesktopService],
  templateUrl: './work-exp.component.html',
  styleUrl: './work-exp.component.css',
})
export class WorkExpComponent implements OnInit {
  @Input() data!: WorkExpAttributes;

  duration!: string;
  isPresent!: boolean;

  private workExpService = inject(WorkExpService);
  data$ = this.workExpService.data$;

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
