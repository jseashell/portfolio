import { Component } from '@angular/core';
import { NavComponent } from '../../shared/components/nav/nav.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent {}
