import { Component } from '@angular/core';
import { SkillButtonComponent } from './skill-button/skill-button.component';
import { SkillDialogComponent } from './skill-dialog/skill-dialog.component';
import { skills } from './skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillButtonComponent, SkillDialogComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills = skills;
}
