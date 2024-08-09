import { Component, EventEmitter, inject, Output, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatToolbarModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {
  @Output() toggle = new EventEmitter();
  private readonly dialog = inject(MatDialog);
  @ViewChild('tbar') tbar!: MatToolbar;

  toggleSidenav() {
    this.toggle.emit();
  }

  openDialog() {
    const dialogRef = this.dialog.open(MessageDialogComponent, {
      width: '90%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Message: ${result}`);
    });
  }
}
