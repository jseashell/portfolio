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
      body: 'See my professional journey building scalable, reliable software across different domains',
    },
    {
      title: 'Skills',
      thumbnail: 'images/cards/skills.jpeg',
      routerLink: '/skills',
      body: 'Check out the technical skills that I bring to the table.',
    },
    // {
    //   title: 'Apps',
    //   thumbnail: 'images/cards/apps.jpeg',
    //   routerLink: '/apps',
    //   body: 'My curated set of public projects that demonstrate how I turn ideas into polished, working apps',
    // },
  ];
}
