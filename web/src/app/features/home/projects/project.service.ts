import { Observable, of } from 'rxjs';

export interface Project {
  label: string;
  excerpt: string;
  thumbnail: string;
  alt: string;
  buttons: Array<{
    href: string;
    cta: string;
    matIcon?: string;
    svgIcon?: string;
  }>;
}

export class ProjectService {
  get projects$(): Observable<Project[]> {
    return of([
      {
        label: 'EZMC CLI',
        excerpt:
          'A server management CLI for self-hosting Minecraft Java Edition in AWS Elastic Container Service. The server is configured with a free, open-source Cloudformation template.',
        thumbnail: '/images/ezmc.png',
        alt: 'Screenshot',
        buttons: [
          {
            href: 'https://jseashell.github.io/ezmc-cli',
            cta: 'Visit',
            matIcon: 'open_in_new',
          },
          {
            href: 'https://github.com/jseashell/ezmc-cli',
            cta: 'Github',
            svgIcon: 'github',
          },
        ],
      },
      {
        label: 'KDot Lyrics',
        excerpt:
          'Random Kendrick Lamar lyrics at the click of a button. I built a Golang program to seed an AWS DynamoDB table with lyrics. The web app is written with Angular. The data is fetched through AWS Lambda.',
        thumbnail: '/images/kdot-lyrics.png',
        alt: 'Screenshot',
        buttons: [
          {
            href: 'https://kdotlyrics.com',
            cta: 'Visit',
            matIcon: 'open_in_new',
          },
          {
            href: 'https://github.com/jseashell/kdot-lyrics-client',
            cta: 'Web App',
            svgIcon: 'github',
          },
          {
            href: 'https://github.com/jseashell/kdot-lyrics-api',
            cta: 'API',
            svgIcon: 'github',
          },
          {
            href: 'https://github.com/jseashell/lyrics-db-seeder',
            cta: 'Scraper',
            svgIcon: 'github',
          },
        ],
      },
      {
        label: 'APM Pulse',
        excerpt:
          'Game-style APM counter in your VS Code bottom status bar that track your actions per minute while coding. It features command palette and settings integrations.',
        thumbnail: '/images/apm-pulse.gif',
        alt: 'Demo gif',
        buttons: [
          {
            href: 'https://marketplace.visualstudio.com/items?itemName=jseashell.apm-pulse',
            cta: 'Marketplace',
            svgIcon: 'vscode',
          },
          {
            href: 'https://github.com/jseashell/apm-pulse',
            cta: 'Github',
            svgIcon: 'github',
          },
        ],
      },
    ]);
  }
}
