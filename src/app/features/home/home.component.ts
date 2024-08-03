import { Component } from '@angular/core';

import { animate, style, transition, trigger } from '@angular/animations';
import { AskAQuestionComponent } from './ask-a-question/ask-a-question.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WorkExpComponent } from './work-exp/work-exp.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AskAQuestionComponent, PortfolioComponent, WorkExpComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: '0', transform: 'translateY(100%)' }),
        animate('.8s .8s ease-in', style({ opacity: '1', transform: 'translateY(0%)' })),
      ]),
      transition(':leave', [
        style({ opacity: '1', transform: 'translateY(0%)' }),
        animate('.8s .8s ease-out', style({ opacity: '0', transform: 'translateY(-100%)' })),
      ]),
    ]),
  ],
})
export class HomeComponent {}
