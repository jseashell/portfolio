import { NgClass } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ToolbarCardComponent } from './toolbar-card/toolbar-card.component';
import { ToolbarNavComponent } from './toolbar-nav/toolbar-nav.component';
import { ToolbarTitleComponent } from './toolbar-title/toolbar-title.component';
import { ToolbarTitleService } from './toolbar-title/toolbar-title.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    NgClass,
    RouterModule,
    ToolbarCardComponent,
    ToolbarNavComponent,
    ToolbarTitleComponent,
  ],
  providers: [ToolbarTitleService],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {
  @HostBinding('class.home') @Input() isHome!: boolean;
}
