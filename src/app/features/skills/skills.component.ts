import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills = [
    'AWS',
    'HTML',
    'CSS',
    'JavaScript',
    'Typescript',
    'SQL',
    'noSQL',
    'Serverless Framework',
    'Git',
    'Single Sign-On',
    'Security',
    'JWT',
    'Linux',
    'Node.js',
    'Angular',
  ].sort((a, b) => a.localeCompare(b));
}
