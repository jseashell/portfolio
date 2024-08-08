import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { DesktopService } from '@app/shared/services';
import { WorkExpCardComponent } from './work-exp-card/work-exp-card.component';
import { WorkExpService } from './work-exp.service';

@Component({
  selector: 'app-work-exp',
  standalone: true,
  imports: [AsyncPipe, MatCardModule, MatDividerModule, MatGridListModule, WorkExpCardComponent],
  providers: [DesktopService, WorkExpService],
  templateUrl: './work-exp.component.html',
  styleUrl: './work-exp.component.css',
})
export class WorkExpComponent {
  private workExpService = inject(WorkExpService);
  cards$ = this.workExpService.cards$;

  private desktopService = inject(DesktopService);
  isDesktop$ = this.desktopService.isDesktop$;
}
