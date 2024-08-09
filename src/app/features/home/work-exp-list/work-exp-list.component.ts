import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { DesktopService } from '@app/shared/services';
import { tap } from 'rxjs';
import { WorkExpListItemComponent } from './work-exp-list-item/work-exp-list-item.component';
import { WorkExpListService } from './work-exp-list.service';

@Component({
  selector: 'app-work-exp-list',
  standalone: true,
  imports: [AsyncPipe, MatCardModule, MatDividerModule, MatListModule, WorkExpListItemComponent],
  providers: [DesktopService, WorkExpListService],
  templateUrl: './work-exp-list.component.html',
  styleUrl: './work-exp-list.component.css',
})
export class WorkExpListComponent {
  private workExpService = inject(WorkExpListService);
  cards$ = this.workExpService.cards$.pipe(tap((cards) => console.log(cards)));

  private desktopService = inject(DesktopService);
  isDesktop$ = this.desktopService.isDesktop$;
}
