import { Component } from '@angular/core';
import { WorkExpComponent } from './work-exp/work-exp.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [WorkExpComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
