import { Component, OnInit } from '@angular/core';

import { Position } from '../position/position.model';
import positionsData from '../../assets/data/data.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  positions: Position[] = positionsData as Position[];

  constructor() {}

  ngOnInit(): void {
    positionsData.map((position) => {
      return {
        title: position.title,
        company: {
          name: position.company.name,
        },
        positionType: position.positionType,
        startDate: new Date(position.startDate).toLocaleDateString(),
        endDate: position.endDate
          ? new Date(position.endDate).toLocaleDateString()
          : 'Present',
        description: position.description,
      };
    });
  }
}
