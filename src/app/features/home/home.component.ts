import { animate, style, transition, trigger } from '@angular/animations';
import { AsyncPipe, DatePipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterLink } from '@angular/router';
import dayjs from 'dayjs';
import { ExperienceAttributes } from './experience.interface';
import { ExperienceService } from './experience.service';
import { heroSlide, heroSlideTiming } from './hero/hero-slide';
import { HeroComponent } from './hero/hero.component';
import { SkillsDialogComponent } from './skills-dialog/skills-dialog.component';
import { skills } from './skills.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsyncPipe,
    DatePipe,
    HeroComponent,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    NgClass,
    RouterLink,
    SkillsDialogComponent,
  ],
  providers: [ExperienceService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    heroSlide,
    trigger('fade', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate(`${heroSlideTiming}s ${1.5 * heroSlideTiming}s ease-in`, style({ opacity: '1' })),
      ]),
      transition(':leave', [style({ opacity: '1' }), animate(`${heroSlideTiming}s ease-out`, style({ opacity: '0' }))]),
    ]),
  ],
})
export class HomeComponent {
  skills = skills;
  private dialog = inject(MatDialog);
  openDialog(skill: { name: string; description: string }) {
    this.dialog.open(SkillsDialogComponent, {
      data: {
        name: skill.name,
        description: skill.description,
      },
    });
  }

  isPresent!: boolean;
  private experienceService = inject(ExperienceService);
  data$ = this.experienceService.data$;
  duration(attrs: ExperienceAttributes) {
    const startDayjs = dayjs(attrs.startDate);
    const endDayjs = dayjs(attrs.endDate);

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
