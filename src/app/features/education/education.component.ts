import { AsyncPipe, DatePipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { postHeroFade } from '@app/shared/animations';
import { DesktopService } from '@app/shared/services';
import { EducationService } from './education.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [AsyncPipe, DatePipe, MatCardModule, MatGridListModule, NgClass],
  providers: [EducationService],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
  animations: [postHeroFade],
})
export class EducationComponent {
  educationService = inject(EducationService);
  desktopService = inject(DesktopService);
}
