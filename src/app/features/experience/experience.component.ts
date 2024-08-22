import { AsyncPipe, DatePipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { postHeroFade } from '@app/shared/animations';
import dayjs from 'dayjs';
import { ExperienceAttributes } from './experience.interface';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [AsyncPipe, DatePipe, MatExpansionModule, NgClass],
  providers: [ExperienceService],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  animations: [postHeroFade],
})
export class ExperienceComponent {
  isPresent!: boolean;
  private experienceService = inject(ExperienceService);
  data$ = this.experienceService.data$;

  duration(attrs: ExperienceAttributes) {
    const startDayjs = dayjs(attrs.startDate);
    const endDayjs = dayjs(attrs.endDate);

    this.isPresent = endDayjs.isSame(dayjs(), 'month');

    const numMonths = endDayjs.diff(startDayjs, 'month');
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
      return startDayjs.diff(endDayjs, 'day') + ' days';
    }
  }
}
