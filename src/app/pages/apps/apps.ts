import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FadeInOnScrollDirective } from '@app/common/directives';
import { Project } from '@app/common/types';

@Component({
  selector: 'app-apps',
  standalone: true,
  imports: [CommonModule, FadeInOnScrollDirective, MatCardModule, MatIconModule],
  templateUrl: './apps.html',
  styleUrls: ['./apps.scss'],
})
export class AppsComponent {
  apps: Project[] = [
    {
      title: 'Lyrics DB Seeder',
      status: 'demo',
      titleLinks: [
        {
          href: 'https://github.com/jseashell/lyrics-db-seeder',
          tooltip: 'Visit Github repository',
          svgIcon: 'github',
        },
      ],
      summary: 'Genius.com scraper and cloud storage tool',
      thumbnail: '',
      body: 'A Golang program that scrapes lyrics from Genius.com and seeds an AWS DynamoDB table. It uses goroutines to scrape and seed concurrently, reducing the time it takes to get the data into the database.',
    },
    {
      title: 'EZMC CLI',
      status: 'demo',
      titleLinks: [
        {
          href: 'https://jseashell.github.io/ezmc-cli',
          tooltip: 'Visit info page',
          matIcon: 'open_in_new',
        },
        {
          href: 'https://github.com/jseashell/ezmc-cli',
          tooltip: 'Visit Github repository',
          svgIcon: 'github',
        },
      ],
      summary: 'Minecraft server infra-as-code tool',
      thumbnail: 'images/ezmc.png',
      body: 'A server management CLI for self-hosting Minecraft Java Edition in AWS Elastic Container Service. The server is configured with a free, open-source Cloudformation template.',
    },
    {
      title: 'APM Pulse',
      status: 'live',
      titleLinks: [
        {
          href: 'https://marketplace.visualstudio.com/items?itemName=jseashell.apm-pulse',
          tooltip: 'Visit VS Code marketplace',
          svgIcon: 'vscode',
        },
        {
          href: 'https://github.com/jseashell/lyrics-db-seeder',
          tooltip: 'Visit Github repository',
          svgIcon: 'github',
        },
      ],
      summary: 'VS Code extension',
      thumbnail: 'images/apm-pulse.gif',
      body: 'A game-style APM counter in your VS Code status bar that tracks your actions per minute while coding. This extension features command palette and settings integrations.',
    },
  ];
}
