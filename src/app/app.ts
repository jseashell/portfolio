import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactComponent, ProjectsComponent } from '@app/components';
import { HeroComponent } from './components/hero/hero';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ContactComponent, HeroComponent, ProjectsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly year = new Date().getFullYear();
}
