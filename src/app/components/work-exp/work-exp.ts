import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FadeInOnScrollDirective } from '@app/common/directives';
import { Project } from '@app/common/types/components/projects/projects';

@Component({
  selector: 'app-work-exp',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, FadeInOnScrollDirective],
  templateUrl: './work-exp.html',
  styleUrls: ['./work-exp.scss'],
})
export class WorkExpComponent {
  proExperience: Project[] = [
    {
      title: 'Genesys Orchestrators',
      status: 'live',
      titleLinks: [
        {
          href: 'https://orchestrators.genesys.com',
          tooltip: 'Visit',
          matIcon: 'open_in_new',
        },
      ],
      company: 'Genesys Cloud Services, Inc.',
      yoe: '2023 to Present',
      thumbnail: 'images/orchestrators.jpg',
      summary: 'Agentic AI customer success platform',
      body: 'Genesys Orchestrators brings together education, community, resources, support and advocacy. Everything you need in one place to succeed. As a Genesys Orchestrator, you have the right knowledge, resources, community and credentials to make an impact.',
    },
    {
      title: 'Genesys Knowledge Network',
      status: 'offline',
      company: 'Genesys Cloud Services, Inc.',
      yoe: '2021 to 2025',
      thumbnail: 'images/gkn.png',
      summary: 'Customer success single-pane-of-glass',
      body: 'The Genesys Knowledge Network was the all-in-one access point for Genesys resources. Enables users to browse the library of resources for Genesys Cloud®, AppFoundry®, education, community forums, and resources for flagship features and other legacy products.',
    },
    {
      title: 'Employee Onboarding',
      status: 'live',
      company: 'Genesys Cloud Services, Inc.',
      yoe: '2021 to 2023',
      thumbnail: 'images/internal-welcome.jpg',
      summary: 'Internal, interactive video-onboarding experience',
      body: 'This interactive web application was created to welcome and guide new customer success employees through their first days at Genesys. It provided essential information about company policies, product resources, and internal education and communication tools, ensuring a smooth transition into the organization and fostering a sense of belonging.',
    },
    {
      title: 'Orchard Trellis',
      status: 'acquired',
      company: 'Orchard Software',
      yoe: '2018 to 2021',
      thumbnail: 'images/lims.webp',
      summary: 'Laboratory information management system',
      body: 'Orchard® Trellis™ was a specialized, web-based software solution from Orchard Software designed to integrate point-of-care (POC) testing devices with electronic medical records (EMRs) and Orchard\'s Harvest LIS. It acted as a "review, click, and go" bridge for remote testing locations, automated result delivery, improved QC tracking, and accurate billing.',
    },
    {
      title: 'Orchard Device Engine',
      status: 'acquired',
      company: 'Orchard Software',
      yoe: '2016 to 2021',
      thumbnail: 'images/lims-workflow.webp',
      summary: 'Message broker and ETL web service',
      body: 'The Orchard® Device Engine™ was a proprietary message broker and Extract Transform Load (ETL) tool developed by Orchard Software. It facilitated seamless integration between Orchard Trellis and over 150 laboratory instruments, enabling efficient data exchange, improved workflow automation, and enhanced overall laboratory operations.',
    },
  ];
}
