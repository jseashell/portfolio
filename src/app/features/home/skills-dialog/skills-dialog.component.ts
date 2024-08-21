import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-skills-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './skills-dialog.component.html',
  styleUrl: './skills-dialog.component.css',
})
export class SkillsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
