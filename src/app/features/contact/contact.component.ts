import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { postHeroFade } from '@app/shared/animations';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [postHeroFade],
})
export class ContactComponent {
  questionForm = new FormGroup({
    subject: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', [Validators.required]),
  });

  submit(): void {
    if (this.questionForm.valid) {
      console.log('submitted a message', this.questionForm);
    }
  }
}
