import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})
export class ProjectsComponent implements AfterViewInit {
  projects = Array.from({ length: 5 }).map((_, i) => ({
    title: `Project ${i + 1}`,
    seed: `p${i + 1}`,
  }));

  @ViewChildren('projectEl') projectEls!: QueryList<ElementRef<HTMLElement>>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0' }
    );

    this.projectEls.forEach((el) => observer.observe(el.nativeElement));
  }
}
