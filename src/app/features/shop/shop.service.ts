import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ServicesCard } from './shop.interface';

@Injectable()
export class ShopService {
  get cards$(): Observable<ServicesCard[]> {
    return of([
      {
        title: 'API Design & Development',
        description:
          "Own your software ecosystem with a robust, scalable API that seamlessly integrates your front-end application and database. Whether you're developing new APIs or refining existing ones, I provide tailored solutions that meet your business needs and technical requirements. My approach ensures that your APIs are optimized for performance and security.",
      },
      {
        title: 'Technical Consulting',
        description:
          "Unlock the full potential of your software systems with my Technical Consulting services. I provide comprehensive evaluations of your existing architecture to identify security flaws, optimize performance, and ensure scalability. I will dive deep into your system's design to turn complex challenges into seamless opportunities for growth.",
      },
      {
        title: 'Web Design & Development',
        description:
          "Promote your online presense with a website that combines elegance with performance, and watch your online vision come to life. Specializing in creating fast, secure, and visually captivating websites, I design and develop tailored solutions that reflect your brand's identity and engage your audience. Perfect for portfolios, landing pages, forms, restaurants, and other small business sites.",
      },
      {
        title: 'Business Integrations',
        description:
          "Streamline your operations and expand your capabilities with seamless integration to the apps and services you love using. Whether you're integrating payment gateways, CRM systems, or other third-party services, my approach ensures smooth, secure integrations that align with your business needs. I provide end-to-end solutions that simplify complex integrations and drive operational efficiency.",
      },
      {
        title: 'Design / Code Review',
        description:
          'Get a second set of eyes. External reviews help to achieve a seamless, high-performance web presence that stands out and operates flawlessly. Receive actionable recommendations on UI, UX, and codeto enhance site usability and engagement. One-time and dedicated options available.',
      },
      {
        title: 'Coaching / Tutoring',
        description:
          "Unlock your potential in JavaScript, TypeScript, Angular, React, AWS, HTML, CSS, and more. Whether you're a beginner aiming to grasp the fundamentals or an experienced developer seeking to deepen your knowledge in something new, our sessions will be structured with a focus on practical, real-world applications.",
      },
    ]);
  }
}