import { AsyncPipe } from '@angular/common';
import { AfterViewInit, Component, inject, ViewChild, ViewChildren } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { ProjectService } from './project.service';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [AsyncPipe, MatButtonModule, MatChipsModule, MatIconModule, MatTabsModule],
  providers: [ProjectService],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class PortfolioComponent implements AfterViewInit {
  service = inject(ProjectService);
  @ViewChild(MatTabGroup) group!: MatTabGroup;
  @ViewChildren(MatTab) tabs!: MatTab[];

  tabNumber!: number;
  selected = 0;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  ngAfterViewInit() {
    this.tabNumber = this.tabs.length;
  }

  swipe(eType: string) {
    console.log(eType);
    if (eType === this.SWIPE_ACTION.LEFT && this.selected > 0) {
      console.log('movin left');
      this.selected--;
    } else if (eType === this.SWIPE_ACTION.RIGHT && this.selected + 1 < this.tabNumber) {
      console.log('movin right');
      this.selected++;
    }
    console.log(this.selected);
  }
}
