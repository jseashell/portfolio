import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { postHeroFade } from '@app/shared/animations';
import { HeroComponent } from '../hero/hero.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EducationComponent, ExperienceComponent, HeroComponent, PortfolioComponent, RouterLink, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [postHeroFade],
})
export class HomeComponent {}
