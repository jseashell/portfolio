import { Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { OfferingsCardComponent } from '../offerings-card/offerings-card.component';
import { OfferingsService } from '../offerings.service';

@Component({
  selector: 'app-offerings-cube',
  standalone: true,
  imports: [OfferingsCardComponent],
  providers: [OfferingsService],
  templateUrl: './offerings-cube.component.html',
  styleUrl: './offerings-cube.component.css',
})
export class OfferingsCubeComponent {
  @ViewChild('cube') private cube!: ElementRef;
  private isDragging = false;
  private startX!: number;
  private startY!: number;
  private currentX = 0;
  private currentY = 0;

  cards = inject(OfferingsService).cards;

  @HostListener('document:mousedown', ['$event'])
  @HostListener('document:touchstart', ['$event'])
  onMouseDown(event: any) {
    event?.preventDefault();
    event?.stopPropagation();
    if (this.cube) {
      this.isDragging = true;
      this.startX = event.clientX;
      this.startY = event.clientY;

      this.cube.nativeElement.style.transition = 'none'; // Disable transition while dragging
    }
  }

  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:touchmove', ['$event'])
  onMouseMove(event: any) {
    event?.preventDefault();
    event?.stopPropagation();
    if (!this.isDragging) return;

    if (this.cube) {
      const dx = event.clientX - this.startX;
      const dy = event.clientY - this.startY;
      this.currentX += dx / 2; // Adjust sensitivity
      this.currentY -= dy / 2; // Adjust sensitivity
      this.cube.nativeElement.style.transform = `rotateX(${this.currentY}deg) rotateY(${this.currentX}deg)`;
      this.startX = event.clientX;
      this.startY = event.clientY;
    }
  }

  @HostListener('document:mouseup', ['$event'])
  @HostListener('document:touchend', ['$event'])
  @HostListener('document:touchcancel', ['$event'])
  onMouseUp(event: any) {
    event?.preventDefault();
    event?.stopPropagation();
    if (this.cube) {
      this.isDragging = false;
      this.cube.nativeElement.style.transition = 'transform 0.5s'; // Re-enable transition
    }
  }
}
