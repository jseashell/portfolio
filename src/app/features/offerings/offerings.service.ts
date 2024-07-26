import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OfferingsCard } from './offerings.interface';

@Injectable()
export class OfferingsService {
  get cards$(): Observable<OfferingsCard[]> {
    return of([
      {
        title: 'Web Design & Development',
        price: '$$$ - $$$$',
        description:
          "Transform your online presence with my Web Development services. Specializing in creating fast, secure, and visually captivating websites, I design and develop tailored solutions that reflect your brand's identity and engage your audience. I will ensure that your site is optimized for performance across all devices with a responsive design that delivers a seamless user experience. Perfect for portfolios, landing pages, and small business sites, my static websites are built to be lightweight and efficient, offering exceptional speed and reliability. Elevate your digital footprint with a static website that combines elegance with performance, and watch your online vision come to life.",
      },
      {
        title: 'Technical Consulting',
        price: '$$$$',
        description:
          "Unlock the full potential of your software systems with my Technical Consulting services. I provide comprehensive evaluations of your existing architecture to identify security flaws, optimize performance, and ensure scalability. I will dive deep into your system's design, offering actionable insights and tailored recommendations that align with your business goals. Whether you're planning a new project or seeking to enhance an existing one, my Architecture Review services help you achieve robust, efficient, and future-proof solutions. Elevate your software infrastructure with precision and expertise, and turn complex challenges into seamless opportunities for growth.",
      },
      {
        title: 'API Design & Development',
        price: '$$ - $$$',
        description:
          "Elevate your software ecosystem with our expert API Design and Development services at [Your Company Name]. We specialize in crafting robust, scalable APIs that seamlessly integrate with your applications and third-party services, enhancing functionality and interoperability. Our approach ensures that your APIs are designed with clear, well-documented endpoints, optimized performance, and secure communication. Whether you're developing new APIs or refining existing ones, we provide tailored solutions that meet your business needs and technical requirements. Let us help you unlock the full potential of your digital infrastructure with APIs that drive efficiency, innovation, and growth.",
      },
      {
        title: '3rd-party Integration',
        price: '$$',
        description:
          "Streamline your operations and expand your capabilities with our expert 3rd-Party Integration services at [Your Company Name]. We specialize in seamlessly connecting your software systems with external platforms, services, and APIs, enhancing functionality and enabling efficient data exchange. Our team ensures smooth, secure integrations that align with your business goals and technical requirements, whether you're integrating payment gateways, CRM systems, or other third-party services. With a focus on reliability and performance, we provide end-to-end solutions that simplify complex integrations and drive operational efficiency. Let us help you leverage the power of external services to unlock new opportunities and enhance your digital ecosystem.",
      },
      {
        title: 'UI/Code Review',
        price: '$',
        description:
          'We offer an in-depth analysis of your website and codebase to ensure top-notch performance, security, and maintainability. Our Site Review evaluates user experience, design, and functionality, providing actionable recommendations to enhance site usability and engagement. Concurrently, our Code Review scrutinizes your code for efficiency, best practices, and potential issues, delivering insights to improve quality and reliability. By combining these reviews, we help you achieve a seamless, high-performance web presence that stands out and operates flawlessly. Let us transform your digital assets into robust, efficient, and user-friendly solutions.',
      },
      {
        title: 'Tutoring',
        price: '$',
        description:
          "Unlock your coding potential with our tailored Tutoring services at [Your Company Name], where we offer expert guidance in JavaScript, TypeScript, Angular, React, AWS, HTML, and CSS. Our experienced tutors provide personalized, hands-on instruction designed to build your skills and confidence across these essential technologies. Whether you're a beginner aiming to grasp the fundamentals or an experienced developer seeking to deepen your knowledge, our sessions are structured to meet your individual learning needs and goals. With a focus on practical, real-world applications, we help you master the tools and techniques necessary to excel in modern software development. Elevate your expertise and advance your career with our dedicated tutoring support.",
      },
    ]);
  }
}
