import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface Experience_1 {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
}
@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {

   constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit(): void {
    this.setMetaTags();
  }

  companies:any = [
    {
      name: 'SSBrinet Innovations',
      icon: 'https://www.ssbrinet.com/favicon.png',
      duration: 'June 2025 - Present (Part-time)',
      degination: "Software Engineer",
      location: 'Greate Noida, Uttar Pradesh · Remote',
      points: [
        'Designed and developed the frontend interface using Angular with modular, component-driven architecture.',
        'Created REST APIs using Spring Boot for dynamic tool rendering and processing.',
        'Built interactive forms for input-heavy tools like plagiarism checkers, converters, and calculators.',
        'Integrated third-party APIs (OCR, Translation, SEO APIs) with secure handling.',
        'Managed file upload/download systems for tools like PDF converters and image converters.',
        'Implemented JWT-based authentication for secure sections of the platform.',
        'Implemented JWT-based authentication for secure sections of the platform.',
        'Focused on responsive UI compatible with all devices (desktop, tablet, mobile).',
        'Worked on SEO optimization for tool pages (dynamic meta tags, sitemap generation, robots.txt).',
        'Ensured error handling and smooth user feedback with toasts, loaders, and validations.',
        'Coordinated with backend team for performance optimizations and scaling strategies.'
      ]
    },
    {
      name: 'Redmil Business (Rejoin)',
      icon: '/assets/images/redmil.jpeg',
      duration: 'Sep 2024 - Present',
      degination: "Full Stack Developer",
      location: 'Sector 142 Noida, Uttar Pradesh · On-site',
      points: [
        'Integrated fintech services like APES, Aadhaar Pay, DMT, Micro-ATM, Recharge, and Bill Payment APIs for seamless user transactions.',
        'Implemented profile authentication and verification using secure API consumption for enhanced security and user trust.',
        'Developed passbook and transaction history modules with real-time updates and responsive UI in Angular.',
        'Built business reports and commission sheet interfaces, including filters, pagination, and downloadable formats (PDF/Excel)',
        'Created cash-out functionality with live balance tracking and error-handling mechanisms.',
        'Managed secure communication between frontend and backend, including token handling, headers, and encrypted data transmission.',
        'Worked with Java Spring Boot backend when required, especially for encryption, decryption, and sensitive data handling.',
        'Implemented admin-level controls for managing agents, transaction approvals, and report generation.',
        'Handled full-stack feature development, from UI/UX to API integration, testing, and deployment, with a focus on scalability.'
      ]
    },
    {
      name: 'WebConvoy Pvt Ltd',
      icon: '/assets/images/webconvoy.jpeg',
      duration: 'May 2024 - Aug 2024',
      degination: "Angular Developer",
      location: 'H-159, Sector 63, Noida, Uttar Pradesh, India · On-site',
      points: [
        'Designed responsive and interactive UI for core modules like login, registration, top-up, account, and transactions.',
        'Integrated REST APIs for user authentication, transaction processing, and player management.',
        'Developed QR code generation features for seamless payment flows.',
        'Created dynamic car and product listing pages driven by data from backend APIs.',
        'Integrated REST APIs for real-time content management (car listings, product details, blogs).',
        'Developed admin functionalities for adding and updating products and blogs.',
        'Ensured SEO-friendly structure with dynamic meta titles and descriptions.',
        'Collaborated with designers and backend developers to optimize user experience.'
      ]
    },
    {
      name: 'Redmil Business Mall',
      icon: '/assets/images/redmil.jpeg',
      duration: 'Apr 2022 - Apr 2024',
      degination: "Angular Developer",
      location: 'Sector 62 Noida, Uttar Pradesh, India · On-site',
      points: [
        'Designed and developed a modular, component-driven architecture using Angular for scalability and maintainability.',
        'Integrated REST APIs for dynamic data fetching, ensuring seamless communication between frontend and backend services',
        'Developed data filtering, search, and export features for enhanced reporting and data analysis.',
        'Ensured code quality, reusability, and optimization by adhering to Angular best practices.',
        'Utilized RxJS for effective state management and reactive programming patterns.',
        'Handled full-stack feature development, from UI/UX to API integration, testing, and deployment, with a focus on scalability.'
      ]
    },
    {
      name: 'Caria Electronics',
      icon: 'assets/icons/emitrr.png',
      duration: 'Sep 2021 - Mar 2022',
      degination: "Executive Assistant",
      location: 'B18, Block B, Sector 85, Noida, Uttar Pradesh',
      points: [
        'Prepare Handing Excel File as per requirement.',
        'Prepare Inventory as per requirement.',
        'Collection Data from Group.',
        'Prepare PIVOT Table as per requirement.',
        'Prepare VLOOKUP Data sheet as per requirement.'
      ]
    },
  ];

  selectedCompany = this.companies[0];

  selectCompany(company: any) {
    this.selectedCompany = company;
  }

  setMetaTags(): void {
    const pageTitle = 'Work Experience | Satendra Rajput - Angular & Java Full Stack Developer';
    const pageDescription = 'Explore the professional work experience of Satendra Rajput across Fine Quick Solutions, Redmil, WebConvoy, and Caria Electronics. Hands-on roles in Angular, Java Spring Boot, SaaS platforms, fintech, and LMS systems.';
    const imageUrl = 'https://satendrasde.vercel.app/assets/images/meta-experience.jpg'; // ✅ Replace with real image
    const pageUrl = 'https://satendrasde.vercel.app/experience';

    this.titleService.setTitle(pageTitle);

    this.meta.updateTag({ name: 'description', content: pageDescription });
    this.meta.updateTag({ name: 'author', content: 'Satendra Rajput' });
    this.meta.updateTag({ name: 'keywords', content: 'Satendra Rajput Work Experience, Fine Quick Solutions, Redmil Business, WebConvoy, Caria Electronics, Software Engineer, Angular Developer, Full Stack Developer, LMS Developer, Fintech Developer' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: pageDescription });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
    this.meta.updateTag({ property: 'og:url', content: pageUrl });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: pageDescription });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
  }
}
