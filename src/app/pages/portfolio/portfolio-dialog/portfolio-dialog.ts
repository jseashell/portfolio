import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-portfolio-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-dialog.html',
  styleUrls: ['./portfolio-dialog.scss'],
})
export class AppsDialog {
  path = inject<string>(MAT_DIALOG_DATA);
}
