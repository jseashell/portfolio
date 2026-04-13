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
export class HomeComponent {
  cards = [
    {
      title: 'Experience',
      thumbnail: 'images/cards/experience.jpeg',
      routerLink: '/experience',
      body: 'My professional journey building scalable, reliable software across different domains',
    },
    {
      title: 'Services',
      thumbnail: 'images/cards/services.jpeg',
      routerLink: '/services',
      body: 'Offerings that can bring your ideas to life, whether you need an app built or improved',
    },
    {
      title: 'Apps',
      thumbnail: 'images/cards/apps.jpeg',
      routerLink: '/apps',
      body: 'My curated set of public projects that demonstrate how I turn ideas into polished, working apps',
    },
  ];
}
