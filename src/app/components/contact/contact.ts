import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import emailjs from '@emailjs/browser';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
dayjs.extend(timezone);

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class ContactComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(255)]],
      respondTo: ['', [Validators.required, Validators.email]],
      company: ['', [Validators.maxLength(255)]],
      subject: ['', Validators.required, Validators.maxLength(255)],
      message: ['', [Validators.required, Validators.maxLength(5000)]],
    });
  }

  onSubmit() {
    const serviceId = 'service_mrb0spp';
    const templateId = 'template_y08ho7q';
    const userId = 'f7vCMXV59KGVQUOjT';
    if (this.form.valid) {
      // Get user's local time and timezone
      const now = dayjs();
      const localDateTime = now.format('YYYY-MM-DD HH:mm:ss');
      const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const formWithTime = {
        ...this.form.value,
        localDateTime,
        localTimezone,
      };
      emailjs.send(serviceId, templateId, formWithTime, userId).then(
        () => {
          this.snackBar.open('Message sent successfully!', 'Close', {
            duration: 4000,
            panelClass: ['snackbar-success'],
          });
          this.form.reset();
          this.form.markAsPristine();
        },
        (err: any) => {
          console.error(err);
          this.snackBar.open('Oops! Something happened. Please try again later.', 'Close', {
            duration: 4000,
            panelClass: ['snackbar-failure'],
          });
        },
      );
    } else {
      this.form.markAllAsTouched();
    }
  }
}
