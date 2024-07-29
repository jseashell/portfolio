import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { Observable } from 'rxjs';
import { WorkExpCardComponent } from './work-exp-card/work-exp-card.component';
import { WorkExpCard } from './work-exp-card/work-exp-card.interface';
import { WorkExpService } from './work-exp.service';

@Component({
  selector: 'app-work-exp',
  standalone: true,
  imports: [AsyncPipe, MatCardModule, MatDividerModule, MatGridListModule, WorkExpCardComponent],
  providers: [WorkExpService],
  templateUrl: './work-exp.component.html',
  styleUrl: './work-exp.component.css',
})
export class WorkExpComponent implements OnInit {
  private workExpService = inject(WorkExpService);
  cards$!: Observable<WorkExpCard[]>;

  ngOnInit(): void {
    this.cards$ = this.workExpService.cards$;
  }
}
