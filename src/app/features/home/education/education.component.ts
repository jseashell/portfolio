import { AsyncPipe, DatePipe, NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { postHeroFade } from '@app/shared/animations';
import { EducationService } from './education.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [AsyncPipe, DatePipe, MatCardModule, NgClass],
  providers: [EducationService],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
  animations: [postHeroFade],
})
export class EducationComponent {
  educationService = inject(EducationService);
}
