import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LegalContact } from '@app/components/legal-contact/legal-contact';
import { LegalDocument } from '@app/components/legal-document/legal-document';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, LegalContact, LegalDocument],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss',
})
export class PrivacyComponent {}
