import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactComponent, ProjectsComponent } from '@app/components';
import { HeroComponent } from '@app/components/hero/hero';
import { FadeInOnScrollDirective } from '@app/common/directives';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ContactComponent,
    HeroComponent,
    ProjectsComponent,
    FadeInOnScrollDirective,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
