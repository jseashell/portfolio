import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { postHeroFade } from '@app/shared/animations';
import { HeroComponent } from '../hero/hero.component';
import { SkillButtonComponent } from './skill-button/skill-button.component';
import { skills } from './skills.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, RouterLink, SkillButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [postHeroFade],
})
export class HomeComponent {
  skills = skills;
}
