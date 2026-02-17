import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactComponent, ProjectsComponent } from '@app/components';
import { NAME } from './common/constants/application-constants';
import { DesignComponent } from './components/design/design';
import { HeroComponent } from './components/hero/hero';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ContactComponent, HeroComponent, ProjectsComponent, DesignComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly name = NAME;
  readonly year = new Date().getFullYear();
}
