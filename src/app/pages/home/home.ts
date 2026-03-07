import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FadeInOnScrollDirective } from '@app/common/directives';
import { ContactComponent, WorkExpComponent } from '@app/components';
import { HeroComponent } from '@app/components/hero/hero';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ContactComponent,
    FadeInOnScrollDirective,
    HeroComponent,
    WorkExpComponent,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
