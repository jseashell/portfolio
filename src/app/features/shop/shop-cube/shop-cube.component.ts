import { Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { ShopCardComponent } from '../shop-card/shop-card.component';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop-cube',
  standalone: true,
  imports: [ShopCardComponent],
  providers: [ShopService],
  templateUrl: './shop-cube.component.html',
  styleUrl: './shop-cube.component.css',
})
export class ShopCubeComponent {
  cards = inject(ShopService).cards;
  private isDragging = false;
  private startX: any;
  private startY: any;
  private currentX = 0;
  private currentY = 0;
  @ViewChild('cube') private cube!: ElementRef;

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: any) {
    if (this.cube) {
      this.isDragging = true;
      this.startX = event.clientX;
      this.startY = event.clientY;

      this.cube.nativeElement.style.transition = 'none'; // Disable transition while dragging
    }
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: any) {
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
  onMouseUp() {
    if (this.cube) {
      this.isDragging = false;
      this.cube.nativeElement.style.transition = 'transform 0.5s'; // Re-enable transition
    }
  }
}
