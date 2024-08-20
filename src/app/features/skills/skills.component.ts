import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { SkillsDialogComponent } from './skills-dialog/skills-dialog.component';
import { skills } from './skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
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
