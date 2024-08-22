import { AsyncPipe, DatePipe, NgClass } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import { DesktopService } from '@app/shared/services';
import dayjs from 'dayjs';
import { ExperienceAttributes } from './experience.interface';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [AsyncPipe, DatePipe, MatButtonModule, MatExpansionModule, NgClass, RouterLink],
  providers: [DesktopService, ExperienceService],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  @Input() data!: ExperienceAttributes;

  isPresent!: boolean;

  private experienceService = inject(ExperienceService);
  data$ = this.experienceService.data$;

  duration(d: ExperienceAttributes) {
    const startDayjs = dayjs(d.startDate);
    const endDayjs = dayjs(d.endDate);

    this.isPresent = endDayjs.isSame(dayjs(), 'month');

    const numMonths = endDayjs.diff(startDayjs, 'months');
    if (numMonths > 0) {
      const numYears = Math.floor(numMonths / 12);
      const remainingMonths = numMonths % 12;

      if (numYears === 0) {
        return remainingMonths + ' mos';
      } else if (remainingMonths === 0) {
        return numYears + ' yrs';
      } else {
        return numYears + ' yrs ' + remainingMonths + ' mos';
      }
    } else {
      return startDayjs.diff(endDayjs, 'days') + ' days';
    }
  }
}
