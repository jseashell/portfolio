import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FooterComponent, NavbarComponent } from '@app/common';
import { AboutComponent, ContactComponent, ProjectsComponent } from '@app/features';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    ProjectsComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');
}
