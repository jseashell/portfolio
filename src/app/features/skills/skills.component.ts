import { Component, inject } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { SkillsDialogComponent } from './skills-dialog/skills-dialog.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills = [
    {
      name: 'AWS',
      description: `With a medium level of experience in using AWS, I have developed a strong foundation in managing and deploying cloud-based solutions. My expertise is particularly extensive with AWS Lambda functions, where I've built and optimized numerous serverless applications, integrating them seamlessly with other AWS services like API Gateway, DynamoDB, and S3. I've also had some exposure to Elastic Container Service (ECS), where I've worked on containerizing applications and orchestrating their deployment within a cluster. Additionally, I have utilized the Serverless Framework for infrastructure as code, streamlining the deployment process and ensuring consistency across environments.`,
    },
    {
      name: 'HTML',
      description:
        "With a medium level of experience in HTML, I have a solid understanding of building and structuring web pages. I have extensive experience in creating and styling content using HTML5, ensuring semantic markup and accessibility standards are met. I've also had some exposure to integrating HTML with JavaScript and CSS frameworks, enabling interactive and responsive web designs. Additionally, I've worked with templating engines to streamline the creation of dynamic HTML content, ensuring efficient and maintainable code.",
    },
    {
      name: 'CSS',
      description:
        "Having a solid foundation in CSS, I have a strong grasp of designing and styling web pages to create visually appealing and responsive layouts. My extensive experience includes working with CSS3 features, such as Flexbox and Grid, to build complex, multi-column layouts and ensure content adapts smoothly across different screen sizes. I've also had some exposure to pre-processors like SASS and LESS, which have helped me write more maintainable and efficient stylesheets. Additionally, I've utilized CSS frameworks like Bootstrap and Tailwind to accelerate development and maintain design consistency across projects.",
    },
    {
      name: 'JavaScript',
      description:
        "With a comprehensive understanding of JavaScript, I have developed a robust skill set in creating dynamic and interactive web applications. My extensive experience includes working with both ES6+ syntax and older JavaScript standards, allowing me to write clean, efficient, and maintainable code. I've also had some exposure to JavaScript frameworks and libraries such as React and Angular, which have enabled me to build complex user interfaces with ease. Additionally, I have experience with asynchronous programming, using Promises and async/await to handle API requests and other asynchronous tasks efficiently.",
    },
    {
      name: 'Typescript',
      description:
        "With a strong background in TypeScript, I have honed my ability to write robust and scalable applications. My extensive experience includes leveraging TypeScript's static typing to catch errors early and improve code quality, as well as utilizing advanced features like generics and type inference to build flexible and maintainable codebases. I've also had some exposure to integrating TypeScript with popular frameworks such as React, Angular, and Node.js, which has enhanced the reliability and scalability of the projects I've worked on. Additionally, I've used TypeScript to streamline complex codebases, making collaboration easier and reducing the likelihood of runtime errors.",
    },
    {
      name: 'Serverless Framework',
      description:
        'As an expert in the Serverless Framework for Node.js, I possess a deep mastery of building and deploying serverless applications with efficiency and precision. My extensive experience includes architecting complex, scalable applications by leveraging AWS services such as Lambda, API Gateway, DynamoDB, and S3, all orchestrated through the Serverless Framework. I excel in writing custom plugins, optimizing deployment pipelines, and managing multi-stage environments, ensuring seamless and automated CI/CD processes. Additionally, I am proficient in configuring and managing Infrastructure as Code (IaC) using YAML, allowing me to maintain clean, version-controlled, and reproducible serverless environments. My expertise also extends to integrating serverless applications with monitoring and logging tools, ensuring high reliability and performance in production.',
    },
    {
      name: 'Git',
      description:
        'I am highly experienced with Git, As an ex pert in the Serverless Framework for Node.js, I possess a deep mastery of building and deploying serverless applications with efficiency and precision. My extensive experience includes architecting complex, scalable applications by leveraging AWS services such as Lambda, API Gateway, DynamoDB, and S3, all orchestrated through the Serverless Framework. I excel in writing custom plugins, optimizing deployment pipelines, and managing multi-stage environments, ensuring seamless and automated CI/CD processes. Additionally, I am proficient in configuring and managing Infrastructure as Code (IaC) using YAML, allowing me to maintain clean, version-controlled, and reproducible serverless environments. My expertise also extends to integrating serverless applications with monitoring and logging tools, ensuring high reliability and performance in production.',
    },
    {
      name: 'Single Sign-On',
      description:
        'Over the course of my career I have built an in-depth knowledge of implementing and managing secure, seamless authentication across multiple applications. My expertise includes configuring SSO solutions using industry-standard protocols like SAML, OAuth, and OpenID Connect, enabling users to authenticate with a single set of credentials across different platforms. I am proficient in integrating SSO with identity providers such as Okta, Azure AD, and AWS Cognito, ensuring robust and scalable authentication mechanisms. Additionally, I have extensive experience in setting up federated identity systems, managing role-based access controls, and ensuring compliance with security best practices. My skills also include troubleshooting SSO implementations, optimizing user experience, and enhancing security by implementing MFA alongside SSO solutions.',
    },
    {
      name: 'JWT',
      description:
        'I have extensive experience implementing and managing stateless authentication and authorization systems. My expertise includes designing and configuring JWT-based authentication mechanisms, ensuring secure token issuance, validation, and management. I am proficient in integrating JWT with various authentication frameworks and libraries, handling token expiration, and implementing refresh token strategies to maintain session integrity. Additionally, I excel in securing JWTs using techniques such as signing and encryption, managing scopes and claims for fine-grained access control, and troubleshooting common issues related to token handling and security. My skills also extend to optimizing performance and scalability of JWT-based systems and ensuring compliance with best practices in token-based authentication.',
    },
    {
      name: 'Linux',
      description:
        'As an intermediate Linux user, I have a solid understanding of the Linux operating system and its core functionalities. I am comfortable with navigating the command line, using essential commands for file management, process monitoring, and system administration. My experience includes working with various shell environments, such as Bash, and writing basic shell scripts to automate tasks and manage system configurations. I am familiar with package management systems like `apt` and `yum`, and can install, update, and remove software packages effectively. Additionally, I have experience in managing user accounts, configuring permissions, and understanding system logs to troubleshoot common issues. My skills also extend to network configuration, basic system security practices, and understanding the Linux filesystem hierarchy.',
    },
    {
      name: 'Node.js',
      description:
        'As a senior Node.js programmer, I have extensive experience in building and optimizing scalable and high-performance applications using Node.js. I am highly proficient in leveraging modern JavaScript features, including async/await, to handle asynchronous operations efficiently and improve code readability. My expertise includes working with the fs module to manage file system interactions, enabling seamless file read/write operations and stream handling. In addition, I am adept at using NestJS, a progressive Node.js framework, to build well-structured and modular applications. I employ common design patterns such as routes, guards, controllers, and services to establish clear separation of concerns and enhance code organization. My senior-level experience includes mentoring junior developers, conducting code reviews, and leading complex projects from conception through to deployment, all while adhering to best practices and ensuring high code quality.',
    },
    {
      name: 'Angular',
      description:
        "As a highly skilled Angular developer, I have a profound expertise in creating dynamic, responsive, and high-performance web applications using Angular. My extensive understanding of RxJS allows me to manage complex asynchronous data streams with ease, implement reactive programming patterns, and optimize application performance through efficient data handling and state management. I am adept at utilizing Angular's animation capabilities to build engaging and smooth user interfaces, incorporating both simple and advanced animations to enhance the user experience and provide visual feedback. Additionally, my experience with server-side rendering (SSR) using Angular Universal enables me to improve application load times, SEO, and overall performance by rendering Angular applications on the server before sending them to the client. My comprehensive skill set includes designing scalable architectures, optimizing component interactions, and applying best practices for maintainable and efficient code. I am also experienced in integrating Angular with various backend services and APIs, ensuring seamless data flow and robust functionality across web applications.",
    },
  ].sort((a, b) => a.name.localeCompare(b.name));

  private dialog = inject(MatDialog);

  openDialog(skill: { name: string; description: string }) {
    this.dialog.open(SkillsDialogComponent, {
      data: {
        name: skill.name,
        description: skill.description,
      },
    });
  }
}
