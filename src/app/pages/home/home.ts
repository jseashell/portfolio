import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactComponent, ProjectsComponent } from '@app/components';
import { HeroComponent } from '@app/components/hero/hero';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContactComponent, HeroComponent, ProjectsComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
