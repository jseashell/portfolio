import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { postHeroFade } from '@app/shared/animations';
import { HeroComponent } from '../hero/hero.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ExperienceComponent, HeroComponent, RouterLink, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [postHeroFade],
})
export class HomeComponent {}
