import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  technologies: string[];
  category: string;
  demoUrl: string;
  codeUrl: string;
  features: string[];
  client: string;
  date?: string;
  role: string;
  location: string;
}

@Component({
  selector: 'app-project-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {
  projectId!: number;
  project!: Project;

  // Dummy data for the project details
  projects: Project[] = [

    //1 Fine Quick
    {
      id: 1,
      title: 'Fine Quick - Multi-Utility SaaS Platform',
      description:
        'Built Fine Quick, a SaaS platform with 150+ productivity tools using Angular & Spring Boot. Worked on frontend architecture, API integrations, responsive UI, and SEO optimization for tool-based pages.',
      longDescription:
        'Developed Fine Quick, a full-stack SaaS platform offering 150+ online productivity tools including writing, SEO, PDF, developer utilities, calculators, converters, downloaders, and much more. The platform helps writers, students, bloggers, marketers, developers, and content creators to boost their productivity with free online tools.✅ Writing & Grammar Tools (Plagiarism Checker, Paraphrasing Tools, Grammar Checker), ✅ PDF Tools (Merge, Split, Compress, Convert to/from PDF), ✅ SEO & Keyword Tools (Keyword Research, Backlink Checker, SEO Audits), ✅ Video & Media Downloaders (Instagram, TikTok, YouTube, Twitter), ✅ Calculators & Utilities (GST Calculator, Loan Calculator, BMI Calculator), ✅ Developer Tools (JSON/XML Viewer, Encoder/Decoder, Minifiers, Formatters), ✅ Image Tools (Image Resizer, Compressor, Converter), ✅ Security Tools (MD5 Generator, Password Generator, JWT Decoder)',
      image: '/assets/images/projects/finequick_web/home.png',
      gallery: [
        '/assets/images/projects/finequick_web/home.png',
        '/assets/images/projects/finequick_web/login.png',
        '/assets/images/projects/finequick_web/aboutus.png',
        '/assets/images/projects/finequick_web/utils.png',
        '/assets/images/projects/finequick_web/utils_page.png',
        '/assets/images/projects/finequick_web/megamenu.png',
        '/assets/images/projects/finequick_web/popular.png',
        '/assets/images/projects/finequick_web/pricing.png',
        '/assets/images/projects/finequick_web/blog_footer.png',
        '/assets/images/projects/finequick_web/contact.png',
        '/assets/images/projects/finequick_web/dev-tool.png',
        '/assets/images/projects/finequick_web/tools_screen.png',
      ],
      technologies: [
        'HTML',
        'SCSS',
        'Angular/TypeScript',
        'Material UI',
        'RxJS',
        'Java Spring Boot',
        'Spring MVC',
        'Spring Security',
        'REST APIs',
        'MySQL',
        'JWT Authentication',
        'OCR Libraries',
        'SEO APIs',
        'JSON/XML Libraries',
        'Docker',
        'Git & GitHub',
        'Postman',
      ],
      category: 'Anant Rajput',
      demoUrl: 'https://www.finequick.com/',
      codeUrl: 'https://github.com/satendrasde',
      features: [
       'Designed and developed the frontend interface using Angular with modular, component-driven architecture.',
       'Created REST APIs using Spring Boot for dynamic tool rendering and processing.',
       'Built interactive forms for input-heavy tools like plagiarism checkers, converters, and calculators.',
       'Integrated third-party APIs (OCR, Translation, SEO APIs) with secure handling.',
       'Managed file upload/download systems for tools like PDF converters and image converters.',
       'Implemented JWT-based authentication for secure sections of the platform.',
       'Focused on responsive UI compatible with all devices (desktop, tablet, mobile).',
       'Worked on SEO optimization for tool pages (dynamic meta tags, sitemap generation, robots.txt).',
       'Ensured error handling and smooth user feedback with toasts, loaders, and validations.',
       'Coordinated with backend team for performance optimizations and scaling strategies.'
      ],
      client: 'Fine Quick Solutions',
      date: 'June 2025 to Present (Part time)',
      role: 'Software Engineer',
      location: 'Tilpata Karanwas, Greater Noida, Uttar Pradesh 201306,India',
    },

    // 2 Redmil Fintech
    {
      id: 2,
      title: 'Fintech Platform',
      description:
        'Contributing to the development of a comprehensive Fintech platform offering a wide range of banking, payment, and business services..',
      longDescription:
        'Developed and maintained Angular & Java-based applications, ensuring seamless integration and optimized performance. Implemented WebSocket for real-time user balances and live data updates, enhancing user engagement. Integrated dynamic graphs and charts for improved data visualization with smooth UI transitions. Built reusable components for balance displays and analytics to optimize system performance. Integrated essential banking services like Aadhaar ATM, Aadhaar Pay, DMT, microATMs, and credit card services to enhance payment processing. Developed modules for account management, cash collection, bill payments, and UPI onboarding, streamlining financial services. Enabled real-time payment processing for mobile, DTH, and Fastag recharges, and integrated payment gateways for utilities and insurance payments.',
      image: '/assets/images/projects/redmil_fintech/login.png',
      gallery: [
        '/assets/images/projects/redmil_fintech/login.png',
        '/assets/images/projects/redmil_fintech/dashboard.png',
        '/assets/images/projects/redmil_fintech/apes.png',
        '/assets/images/projects/redmil_fintech/recharge.png',
        '/assets/images/projects/redmil_fintech/passbook.png',
        '/assets/images/projects/redmil_fintech/busness-report.png',
        '/assets/images/projects/redmil_fintech/support.png',
        '/assets/images/projects/redmil_fintech/profile.png',
        '/assets/images/projects/redmil_fintech/add-upi.png',
      ],
      technologies: [
        'HTML/CSS',
        'Angular/TypeScript',
        'Java',
        'RESTful APIs',
        'Spring Boot',
        'MySQL',
        'JWT Authentication',
      ],
      category: 'Sagar Raj Singhal',
      demoUrl: 'https://web.redmilbusinessmall.com/login',
      codeUrl: 'https://github.com/satendrasde',
      features: [
        'Integrated fintech services like APES, Aadhaar Pay, DMT, Micro-ATM, Recharge, and Bill Payment APIs for seamless user transactions.',
        'Implemented profile authentication and verification using secure API consumption for enhanced security and user trust.',
        'Developed passbook and transaction history modules with real-time updates and responsive UI in Angular.',
        'Built business reports and commission sheet interfaces, including filters, pagination, and downloadable formats (PDF/Excel)',
        'Created cash-out functionality with live balance tracking and error-handling mechanisms.',
        'Designed and developed reusable frontend components, focusing on responsive design and performance optimization.',
        'Managed secure communication between frontend and backend, including token handling, headers, and encrypted data transmission.',
        'Worked with Java Spring Boot backend when required, especially for encryption, decryption, and sensitive data handling.',
        'Implemented admin-level controls for managing agents, transaction approvals, and report generation.',
        'Handled full-stack feature development, from UI/UX to API integration, testing, and deployment, with a focus on scalability.',
      ],
      client: 'Redmil Business Mall',
      date: 'September 2024 to Present',
      role: 'Full-Stack Developer',
      location: 'Sector 142 Noida, Uttar Pradesh',
    },

    //3 Redmil HDFC
    {
      id: 3,
      title: 'Jan Samarth Referred Cases Dashboard (Angular)',
      description:
        'Developed a fully functional Angular dashboard for Jan Samarth referred case reporting and management, including detailed sanction/disbursement modules, branch master, and lead push functionalities.',
      longDescription:
        'Developed a comprehensive Angular-based dashboard for managing Jan Samarth referred cases with modular reporting features. The dashboard provides detailed tracking and management of various sanction and disbursement reports, including: ANP Sanction/Disbursement - All Categories, ANP Sanction/Disbursement - Agriculture Category, Branch Master Management, Lead Push Management',
      image: '/assets/images/projects/redmil_hdfc/masterBranchData.png',
      gallery: [
        '/assets/images/projects/redmil_hdfc/login.png',
        '/assets/images/projects/redmil_hdfc/dashboard.png',
        '/assets/images/projects/redmil_hdfc/hdfcjansamarth.png',
        '/assets/images/projects/redmil_hdfc/createUserData.png',
        '/assets/images/projects/redmil_hdfc/Update_User_Data.png',
        '/assets/images/projects/redmil_hdfc/hdfcjansamarth.png',
        '/assets/images/projects/redmil_hdfc/masterBranchData.png',
        '/assets/images/projects/redmil_hdfc/leanPush.png',
        '/assets/images/projects/redmil_hdfc/mobile.png',
      ],
      technologies: [
        'HTML/CSS',
        'JavaScript/TypeScript',
        'Angular',
        'Material UI',
      ],
      category: 'Sagar Raj Singhal',
      demoUrl: 'https://hdfc.betterbottech.ai/login/',
      codeUrl: 'https://github.com/satendrasde',
      features: [
        'Designed and developed a modular, component-driven architecture using Angular for scalability and maintainability.',
        'Data filtering and export functionalities',
        'Integrated REST APIs for dynamic data fetching, ensuring seamless communication between frontend and backend services',
        'Developed data filtering, search, and export features for enhanced reporting and data analysis.',
        'Ensured code quality, reusability, and optimization by adhering to Angular best practices.',
        'Utilized RxJS for effective state management and reactive programming patterns.',
        'Handled full-stack feature development, from UI/UX to API integration, testing, and deployment, with a focus on scalability.',
      ],
      client: 'Redmil Business Mall',
      date: 'September 2024 to Present',
      role: 'Full-Stack Developer',
      location: 'Sector 142 Noida, Uttar Pradesh',
    },

    //4 WebConvoy Gaming Website
    {
      id: 4,
      title: 'Online Gambling Platform',
      description:
        'Developed key frontend modules for an online gambling platform, including login, transactions, QR code payments...',
      longDescription:
        'Contributed to the frontend development of a feature-rich online gambling platform offering a variety of games, including poker and other casino-style games. Worked extensively on designing key user interface screens and integrating with backend APIs for seamless user experience. Core functionalities designed & integrated: Login & Registration Pages, Transaction Pages (Top-up, Withdraw), Account Management Pages (Change Password, Profile),Invite Friends Module, QR Code Generation for Payments, Receipt Generation & Transaction History, Player Registration Forms',
      image: '/assets/images/projects/webconvoy_gaming/login.png',
      gallery: [
        '/assets/images/projects/webconvoy_gaming/login.png',
        '/assets/images/projects/webconvoy_gaming/profiles.png',
        '/assets/images/projects/webconvoy_gaming/reset_password.png',
        '/assets/images/projects/webconvoy_gaming/qr_code.png',
        '/assets/images/projects/webconvoy_gaming/player_Register.png',
        '/assets/images/projects/webconvoy_gaming/change_password.png',
        '/assets/images/projects/webconvoy_gaming/address.png',
        '/assets/images/projects/webconvoy_gaming/account.png',
        '/assets/images/projects/webconvoy_gaming/address_details.png',
        '/assets/images/projects/webconvoy_gaming/edit_profile.png',
        '/assets/images/projects/webconvoy_gaming/details.png',
        '/assets/images/projects/webconvoy_gaming/top_up_1.png',
        '/assets/images/projects/webconvoy_gaming/top_up_2.png',
        '/assets/images/projects/webconvoy_gaming/top_up_3.png',
        '/assets/images/projects/webconvoy_gaming/frinds.png',
        '/assets/images/projects/webconvoy_gaming/account.png',
        '/assets/images/projects/webconvoy_gaming/frinds_delete.png',
        '/assets/images/projects/webconvoy_gaming/trans.png',
      ],
      technologies: [
        'HTML/CSS',
        'JavaScript/TypeScript',
        'Angular',
        'Material UI',
      ],
      category: 'Gaurav Singh - Director',
      demoUrl: 'https://poker9club.casino/',
      codeUrl: 'https://github.com/satendrasde',
      features: [
        'Designed responsive and interactive UI for core modules like login, registration, top-up, account, and transactions.',
        'Integrated REST APIs for user authentication, transaction processing, and player management.',
        'Developed QR code generation features for seamless payment flows.',
        'Created reusable UI components and forms using Angular or preferred frontend stack.',
        'Focused on optimizing user experience (UX) with clean layouts and intuitive navigation.',
        'Ensured cross-browser and mobile responsiveness for better reach across devices.',
        'Implemented form validations for critical user flows like player registration and password change.',
      ],
      client: 'WebConvoy Pvt Ltd',
      date: 'March 2023',
      role: 'Frontend Developer(Angular)',
      location: 'H-159, Sector 63 Rd, H Block, Sector 63, Noida',
    },

    //5 PPF
    {
      id: 5,
      title: 'PPF(Paint Protection Film)',
      description:
        'Developed a feature-rich, responsive web application for an Automotive Paint Protection Film (PPF) brand, designed to showcase premium car protection services and products...',
      longDescription:
        'The platform allows users to explore various PPF solutions for different car models, view detailed product descriptions, and engage with educational blog content related to automotive care. An admin panel was also built for efficient management of listings and content.Dynamic Car Listings with specifications, images, and pricing, Product Detail Pages for different PPF products and variants, Admin Panel for adding/updating car models, products, and blog content, Interactive Blog/News Section for SEO and customer engagement, Responsive Design for mobile, tablet, and desktop devices, Contact Inquiry Form with validation and email integration, SEO Optimization for improved search visibility',
      image: '/assets/images/projects/webconvoy_ppf/home.png',
      gallery: [
        '/assets/images/projects/webconvoy_ppf/home.png',
        '/assets/images/projects/webconvoy_ppf/about.png',
        '/assets/images/projects/webconvoy_ppf/afterbefore.png',
        '/assets/images/projects/webconvoy_ppf/cardesign.png',
        '/assets/images/projects/webconvoy_ppf/carwindow.png',
        '/assets/images/projects/webconvoy_ppf/carwrapping.png',
        '/assets/images/projects/webconvoy_ppf/check_packge.png',
        '/assets/images/projects/webconvoy_ppf/clickcolor.png',
        '/assets/images/projects/webconvoy_ppf/colorpro.png',
        '/assets/images/projects/webconvoy_ppf/footer.png',
        '/assets/images/projects/webconvoy_ppf/form.png',
        '/assets/images/projects/webconvoy_ppf/paint.png',
        '/assets/images/projects/webconvoy_ppf/sayto.png',
        '/assets/images/projects/webconvoy_ppf/slider.png',
        '/assets/images/projects/webconvoy_ppf/table.png',
        '/assets/images/projects/webconvoy_ppf/showhand.png',
        '/assets/images/projects/webconvoy_ppf/wrapping.png',
        '/assets/images/projects/webconvoy_ppf/click_slider.png',
      ],
      technologies: [
        'HTML/CSS',
        'JavaScript',
        'TypeScript',
        'Angular',
        'Material UI',
        '',
        'MEAN Stack',
      ],
      category: 'Gaurav Singh - Director',
      demoUrl: 'https://eazycool.com.sg/',
      codeUrl: 'https://github.com/satendrasde',
      features: [
        'Designed and implemented responsive frontend UI using Angular.',
        'Created dynamic car and product listing pages driven by data from backend APIs.',
        'Integrated REST APIs for real-time content management (car listings, product details, blogs).',
        'Developed admin functionalities for adding and updating products and blogs.',
        'Handled form validation and inquiry form submission workflow',
        'Ensured SEO-friendly structure with dynamic meta titles and descriptions.',
        'Used SCSS and Angular Material/Tailwind CSS for UI consistency and branding.',
        'Collaborated with designers and backend developers to optimize user experience.',
      ],
      client: 'WebConvoy Pvt Ltd',
      date: 'March 2023',
      role: 'Frontend Developer(Angular)',
      location: 'H-159, Sector 63 Rd, H Block, Sector 63, Noida',
    },

    //5 Portfolio Website
    {
      id:6,
      title: 'Personal Portfolio Website',
      description:'A personal portfolio website showcasing projects, skills, and professional experience...',
      longDescription:
        'Designed and developed a personal portfolio website to highlight my skills, projects, professional experience, and achievements. The website serves as a professional platform to represent my technical expertise, display live project demos, and provide recruiters or clients with easy access to my work and contact details.',
      image: '/assets/images/projects/portfolio_myself/homelight.png',
      gallery: [
        '/assets/images/projects/portfolio_myself/homelight.png',
        '/assets/images/projects/portfolio_myself/homedark.png',
        '/assets/images/projects/portfolio_myself/aboutlight.png',
        '/assets/images/projects/portfolio_myself/aboutdark.png',
        '/assets/images/projects/portfolio_myself/contactlight.png',
        '/assets/images/projects/portfolio_myself/contactdark.png',
        '/assets/images/projects/portfolio_myself/experi_dark.png',
        '/assets/images/projects/portfolio_myself/experidark.png',
        '/assets/images/projects/portfolio_myself/project_main.png',
        '/assets/images/projects/portfolio_myself/project_1.png',
        '/assets/images/projects/portfolio_myself/project_2.png',
        '/assets/images/projects/portfolio_myself/project_3.png',
      ],
      technologies: ['HTML','CSS','Angular', 'TypeScript', 'Material UI', 'Java Spring Boot', 'Rest APIs'],
      category: 'Satendra Rajput',
      demoUrl: 'https://satendrasde.vercel.app/',
      codeUrl: 'https://github.com/satendrasde',
      features: [
        'Designed the entire website layout using modern, clean, and minimalistic UI.',
        'Built reusable components for sections like Projects, Skills, and Contact.',
        'Added form validation and email sending feature for contact forms.',
        'Integrated animations (if used) for smooth transitions and better UX.',
        'Focused on SEO optimization for better visibility on search engines.',
        'Ensured cross-browser compatibility and fast page load times.',
        'Managed hosting and deployment (if applicable) on platforms like Vercel, Netlify, or custom servers.'
      ],
      client: 'Ownership',
      date: 'March 2023',
      role: 'Software Engineer',
      location: 'Sector 62 Noida, UP, India',
    },

    
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.projectId = +params['id'];
      this.loadProject();
    });
  }

  loadProject(): void {
    // In a real app, this would be a service call to fetch the project
    const project = this.projects.find((p) => p.id === this.projectId);

    if (project) {
      this.project = project;
    } else {
      // Handle project not found
      console.error('Project not found');
    }
  }
}
