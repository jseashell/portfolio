import { Component, HostBinding, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DesktopService } from '@app/shared/services';
import { Subscription, tap } from 'rxjs';
import { EducationAttributes } from '../education.interface';

@Component({
  selector: 'app-education-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './education-card.component.html',
  styleUrl: './education-card.component.css',
})
export class EducationCardComponent implements OnInit, OnDestroy {
  @Input() data!: EducationAttributes;
  @HostBinding('desktop') desktop!: boolean;
  private desktopService = inject(DesktopService);
  private sub!: Subscription;

  ngOnInit(): void {
    this.sub = this.desktopService.isDesktop$
      .pipe(
        tap((isDesktop) => {
          this.desktop = isDesktop;
        }),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
