import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SkillDialogComponent } from '../skill-dialog/skill-dialog.component';

@Component({
  selector: 'app-skill-button',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, SkillDialogComponent],
  templateUrl: './skill-button.component.html',
  styleUrl: './skill-button.component.css',
})
export class SkillButtonComponent {
  @Input() skill!: { name: string; description: string };

  private dialog = inject(MatDialog);

  openDialog(skill: { name: string; description: string }) {
    this.dialog.open(SkillDialogComponent, {
      data: skill,
    });
  }
}
