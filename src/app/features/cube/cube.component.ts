import { Component } from '@angular/core';

@Component({
  selector: 'app-cube',
  standalone: true,
  imports: [],
  templateUrl: './cube.component.html',
  styleUrl: './cube.component.css'
})
export class CubeComponent {
  private isDragging = false;
  private startX: any;
  private startY: any;
  private currentX = 0;
  private currentY = 0;
  const cube = document.getElementById('cube');
  
  function onMouseDown(event) {
      isDragging = true;
      startX = event.clientX;
      startY = event.clientY;
      cube.style.transition = 'none'; // Disable transition while dragging
  }
  
  function onMouseMove(event) {
      if (!isDragging) return;
  
      const dx = event.clientX - startX;
      const dy = event.clientY - startY;
      currentX += dx / 2; // Adjust sensitivity
      currentY -= dy / 2; // Adjust sensitivity
      cube.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`;
      startX = event.clientX;
      startY = event.clientY;
  }
  
  function onMouseUp() {
      isDragging = false;
      cube.style.transition = 'transform 0.5s'; // Re-enable transition
  }
  
  document.addEventListener('mousedown', onMouseDown);
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
}
