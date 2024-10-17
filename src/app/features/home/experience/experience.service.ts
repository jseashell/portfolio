import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExperienceAttributes } from './experience.interface';

@Injectable()
export class ExperienceService {
  get data$(): Observable<ExperienceAttributes[]> {
    return of([
      {
        id: 'genesys-teamlead-sr-swe',
        title: 'Team Lead, Sr. Software Engineer',
        company: 'Genesys',
        thumbnail: 'images/genesys.svg',
        startDate: new Date('2021-04-01'),
        endDate: new Date(),
        location: 'Indianapolis, IN',
        description:
          'I am a Senior Software Engineer on the Innovations Operations team at Genesys, leader in Experience as a Service. My role is lead engineer responsible for designing and developing the Genesys Knowledge Network, a comprehensive web experience for customers, partners, and employees that considers all digital touch points (web experience, communication, methods of engagement) of the Genesys journey.',
      },
      {
        title: 'Team Lead',
        id: 'orchard-teamlead',
        company: 'Orchard Software',
        thumbnail: 'images/orchard.svg',
        startDate: new Date('2019-09-01'),
        endDate: new Date('2021-04-01'),
        location: 'Carmel, IN',
        description:
          'In this role, I led a small Agile team in developing a proprietary message broker and FIFO queuing middleware supporting over 150 medical instruments for labs with diverse business needs and technological constraints. As an individual contributor, my role focused on back-end development. At this point in my time at Orchard, I focused mostly on mission critical tasks and deployments.',
      },
      {
        title: 'Software Engineer',
        id: 'orchard-swe',
        company: 'Orchard Software',
        thumbnail: 'images/orchard.svg',
        startDate: new Date('2016-03-01'),
        endDate: new Date('2019-09-01'),
        location: 'Carmel, IN',
        description:
          "I began at Orchard as an entry-level Software Engineer. My daily tasks covered the full stack. I regularly designed and maintained logic for all layers of my team's project, such as the device interfacing engine, REST API, jQuery client, SQL database clients, and application security.",
      },
    ]);
  }
}
