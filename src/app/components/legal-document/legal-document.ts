import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-legal-document',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal-document.html',
  styleUrls: ['./legal-document.scss'],
})
export class LegalDocument {
  @Input() title!: string;
}
