import { animate, style, transition, trigger } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { heroSlide, heroSlideTiming } from './hero/hero-slide';
import { HeroComponent } from './hero/hero.component';
import { SkillsDialogComponent } from './skills-dialog/skills-dialog.component';
import { skills } from './skills.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, MatButtonModule, MatDialogModule, SkillsDialogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    heroSlide,
    trigger('skillSlide', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate(`${0.8}s ${1.5 * heroSlideTiming}s ease-in`, style({ opacity: '1' })),
      ]),
      transition(':leave', [
        style({ opacity: '1' }),
        animate(`${heroSlideTiming}s ease-out`, style({ opacity: '0', transform: 'translateY(1000%)' })),
      ]),
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
}
