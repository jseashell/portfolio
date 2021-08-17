import { Component, OnInit } from '@angular/core';

import { Position } from '../../model/position/position.model';
import positionsData from '../../../assets/data/data.json';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
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
