import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FadeInOnScrollDirective } from '@app/common/directives';
import { Project } from '@app/common/types';
import { AppsDialog } from './apps-dialog/apps-dialog';

@Component({
  selector: 'app-apps',
  standalone: true,
  imports: [CommonModule, FadeInOnScrollDirective, MatCardModule, MatDialogModule, MatIconModule],
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
      summary: 'Genius.com scraper with cloud storage',
      thumbnail: '',
      body: '<p>A Golang program that scrapes lyrics from Genius.com and seeds an AWS DynamoDB table.</p><p>It uses goroutines to scrape and seed concurrently, reducing the time it takes to get the data into the database.</p>',
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
      summary: 'Minecraft infra-as-code tool',
      thumbnail: 'images/ezmc.png',
      body: '<p>A server management CLI for self-hosting Minecraft Java Edition in AWS Elastic Container Service.</p>The server is configured with a free, open-source Cloudformation template.<p>Available commands include</p><ul><li><code>new</code> Creates a new server with AWS Cloudformation.</li><li><code>ls</code> List your servers by IP address.</li><li><code>start</code>/<code>stop</code> Start/stop a server by IP address.</li><li><code>params</code> Get/set server parameters like OP list, difficulty, and most anything else available via <code>server.properties</code></li></ul>',
    },
    {
      title: 'Group Chat Cloud Service',
      status: 'demo',
      titleLinks: [
        {
          href: 'https://github.com/jseashell/serverless-ws-chat-api',
          tooltip: 'Visit Github repository',
          svgIcon: 'github',
        },
      ],
      summary: 'A chat service for broadcasting messages to all connected users.',
      thumbnail: '',
      body: '<p>A serverless websocket service built on AWS API Gateway v2, Lambda, and DynamoDB.</p><p>This service allows for real-time communication between clients and the Lambda backend using websockets.</p><p>DynamoDB caches clients in order to broadcast any message from one client to all other clients.</p>',
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
      body: '<p>A game-style APM counter in your VS Code status bar that tracks your actions per minute while coding.</p><p>This extension features command palette and settings integrations.</p>',
    },
    {
      title: 'K-Dot Lyrics',
      status: 'offline',
      titleLinks: [
        {
          href: 'https://github.com/jeashell/kdot-lyrics-client',
          tooltip: 'Visit Github repository',
          svgIcon: 'github',
        },
      ],
      summary: 'Random Kendrick Lamar lyrics at the click of a button',
      thumbnail: 'images/kdot-lyrics.png',
      body: "<p>A webapp using the dataset created from Lyrics DB Seeder when given Kendrick Lamar and many associated feature artists.</p><p>Each lyric features the related song title and album artwork.</p><p>There are informational pages showcasing Kendrick Lamar's discography and publicly available platforms.</p>",
    },
  ];

  constructor(private dialog: MatDialog) {}

  openThumbnail(path: string) {
    this.dialog.open(AppsDialog, {
      data: path,
    });
  }
}
