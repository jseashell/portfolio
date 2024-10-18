import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { postHeroFade } from '@app/shared/animations';
import { ContactDialogComponent } from '../contact-dialog/contact-dialog.component';
import { HeroComponent } from '../hero/hero.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContactDialogComponent,
    EducationComponent,
    ExperienceComponent,
    HeroComponent,
    MatButtonModule,
    MatIconModule,
    PortfolioComponent,
    RouterLink,
    SkillsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [postHeroFade],
})
export class HomeComponent {}
