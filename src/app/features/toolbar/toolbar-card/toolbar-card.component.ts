import { NgClass } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Subscription, tap, timer } from 'rxjs';

@Component({
  selector: 'app-toolbar-card',
  standalone: true,
  imports: [MatCardModule, NgClass],
  templateUrl: './toolbar-card.component.html',
  styleUrl: './toolbar-card.component.css',
})
export class ToolbarCardComponent implements OnInit, OnDestroy {
  private visibleSub!: Subscription;
  isVisible = false;

  ngOnInit(): void {
    this.visibleSub = timer(1)
      .pipe(
        tap(() => {
          this.isVisible = true;
        }),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.visibleSub?.unsubscribe();
  }
}
