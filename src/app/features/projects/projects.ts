import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Genesys Orchestrators',
      company: 'Genesys Cloud Services, Inc.',
      yoe: '2023 to Present',
      thumbnail: 'images/orchestrators.jpg',
      summary: 'Agentic AI customer success platform',
      body: 'Genesys Orchestrators brings together education, community, resources, support and advocacy. Everything you need in one place to succeed. As a Genesys Orchestrator, you have the right knowledge, resources, community and credentials to make an impact.',
    },
    {
      title: 'Genesys Knowledge Network',
      company: 'Genesys Cloud Services, Inc.',
      yoe: '2021 to 2023',
      thumbnail: 'images/gkn.png',
      summary: 'Single pane of glass resource web app',
      body: 'The Genesys Knowledge Network was the all-in-one access point for Genesys resources. Enabled users to browse the library of product-specific information and discussions or log in for a personalized experience that included access to resources for Genesys Cloud®, AppFoundry® (integrations), education, community forums, and resources for flagship features and other legacy products.',
    },
    {
      title: 'Employee Onboarding',
      company: 'Genesys Cloud Services, Inc.',
      yoe: '2021 to 2023',
      thumbnail: 'images/internal-welcome.jpg',
      summary: 'Interactive onboarding experience',
      body: 'This interactive web application was created to welcome and guide new customer success employees through their first days at Genesys. It provided essential information about company policies, product resources, and internal education and communication tools, ensuring a smooth transition into the organization and fostering a sense of belonging.',
    },
    {
      title: 'Orchard Trellis',
      company: 'Orchard Software',
      yoe: '2018 to 2021',
      thumbnail: 'images/lims.webp',
      summary: 'Laboratory information management system',
      body: 'Orchard® Trellis™ was a specialized, web-based software solution from Orchard Software designed to integrate point-of-care (POC) testing devices with electronic medical records (EMRs) and Orchard\'s Harvest LIS. It acted as a "review, click, and go" bridge for remote testing locations, automated result delivery, improved QC tracking, and accurate billing.',
    },
    {
      title: 'Orchard Device Engine',
      company: 'Orchard Software',
      yoe: '2016 to 2021',
      thumbnail: 'images/lims-workflow.webp',
      summary: 'Message broker and Extract Transorm Load (ETL) web service',
      body: 'The Orchard® Device Engine™ was a proprietary message broker and Extract Transform Load (ETL) tool developed by Orchard Software. It facilitated seamless integration between 150+ laboratory instruments and Orchard Trellis, enabling efficient data exchange, improved workflow automation, and enhanced overall laboratory operations.',
    },
  ];
}
