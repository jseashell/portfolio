import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LegalContact } from '@app/components/legal-contact/legal-contact';
import { LegalDocument } from '@app/components/legal-document/legal-document';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, LegalContact, LegalDocument],
  templateUrl: './terms.html',
  styleUrl: './terms.scss',
})
export class TermsComponent {}
