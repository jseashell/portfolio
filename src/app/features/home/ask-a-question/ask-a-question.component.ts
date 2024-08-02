import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-ask-a-question',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './ask-a-question.component.html',
  styleUrl: './ask-a-question.component.scss',
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
export class AskAQuestionComponent {
  questionForm = new FormGroup({
    subject: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', [Validators.required]),
  });

  submit(): void {
    if (this.questionForm.valid) {
      console.log('question form', this.questionForm);
    }
  }
}
