import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-apps-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apps-dialog.html',
  styleUrls: ['./apps-dialog.scss'],
})
export class AppsDialog {
  path = inject<string>(MAT_DIALOG_DATA);
}
