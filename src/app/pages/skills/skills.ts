import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FadeInOnScrollDirective } from '@app/common/directives';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, FadeInOnScrollDirective],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss'],
})
export class SkillsComponent {}
