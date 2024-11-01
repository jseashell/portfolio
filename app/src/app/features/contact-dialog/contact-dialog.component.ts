import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { postHeroFade } from '@app/shared/animations';
import { DesktopService } from '@app/shared/services';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [DesktopService],
  templateUrl: './contact-dialog.component.html',
  styleUrl: './contact-dialog.component.css',
  animations: [postHeroFade],
})
export class ContactDialogComponent {
  desktopService = inject(DesktopService);
  questionForm = new FormGroup({
    subject: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    body: new FormControl('', [Validators.required]),
  });

  submit(): void {
    if (this.questionForm.valid) {
      alert('submitted\n' + this.questionForm);
    }
  }
}
