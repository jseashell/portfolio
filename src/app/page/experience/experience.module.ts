import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience.component';
import { NgModule } from '@angular/core';
import { PositionComponent } from './position/position.component';

@NgModule({
  declarations: [ExperienceComponent, PositionComponent],
  imports: [CommonModule],
  exports: [ExperienceComponent],
})
export class ExperienceModule {}
