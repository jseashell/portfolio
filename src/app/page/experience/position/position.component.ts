import { Component, Input, OnInit } from '@angular/core';

import { Position } from '../../../model/position/position.model';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.css'],
})
export class PositionComponent implements OnInit {
  @Input() position!: Position;
  startDate: string;
  endDate: string;

  constructor() {}

  ngOnInit(): void {
    this.startDate = new Date(this.position.startDate).toLocaleDateString();

    if (this.position.endDate) {
      this.endDate = new Date(this.position.endDate).toLocaleDateString();
    } else {
      this.endDate = 'Present';
    }
  }
}
