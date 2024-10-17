import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { EducationAttributes } from '../education.interface';

@Component({
  selector: 'app-education-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './education-card.component.html',
  styleUrl: './education-card.component.css',
})
export class EducationCardComponent {
  @Input() data!: EducationAttributes;
}
