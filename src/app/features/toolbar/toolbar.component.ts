import { NgClass } from '@angular/common';
import { Component, HostBinding, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { ToolbarCardComponent } from './toolbar-card/toolbar-card.component';
import { ToolbarTitleComponent } from './toolbar-title/toolbar-title.component';
import { ToolbarTitleService } from './toolbar-title/toolbar-title.service';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [NavComponent, NgClass, RouterModule, ToolbarCardComponent, ToolbarTitleComponent],
  providers: [ToolbarTitleService],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {
  @HostBinding('class.home') @Input() isHome: boolean | null = false;
}