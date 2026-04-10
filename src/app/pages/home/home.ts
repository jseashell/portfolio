import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { FadeInOnScrollDirective } from '@app/common/directives';
import { ContactComponent } from '@app/components';
import { HeroComponent } from '@app/pages/home/hero/hero';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ContactComponent,
    FadeInOnScrollDirective,
    HeroComponent,
    MatCardModule,
    RouterLink,
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
