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
  date: string;
  role: string;
  location: string;
}

@Component({
  selector: 'app-project-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss'
})
export class ProjectDetails {
 projectId!: number;
  project!: Project;
  
  // Dummy data for the project details
  projects: Project[] = [
    {
      id: 1,
      title: 'Fintech Platform',
      description: 'Contributing to the development of a comprehensive Fintech platform offering a wide range of banking, payment, and business services..',
      longDescription: 'Developed and maintained Angular & Java-based applications, ensuring seamless integration and optimized performance. Implemented WebSocket for real-time user balances and live data updates, enhancing user engagement. Integrated dynamic graphs and charts for improved data visualization with smooth UI transitions. Built reusable components for balance displays and analytics to optimize system performance. Integrated essential banking services like Aadhaar ATM, Aadhaar Pay, DMT, microATMs, and credit card services to enhance payment processing. Developed modules for account management, cash collection, bill payments, and UPI onboarding, streamlining financial services. Enabled real-time payment processing for mobile, DTH, and Fastag recharges, and integrated payment gateways for utilities and insurance payments.',
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
        '/assets/images/projects/redmil_fintech/add-upi.png'

      ],
      technologies: ['HTML/CSS', 'Angular/TypeScript', 'Java', 'RESTful APIs', 'Spring Boot', 'MySQL', 'JWT Authentication'],
      category: 'Sagar Raj Singhal',
      demoUrl: 'https://web.redmilbusinessmall.com/login',
      codeUrl: 'https://github.com',
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
        'Handled full-stack feature development, from UI/UX to API integration, testing, and deployment, with a focus on scalability.'
      ],
      client: 'Redmil Business Mall',
      date: 'September 2024 to Present',
      role: 'Full-Stack Developer',
      location: 'Sector 142 Noida, Uttar Pradesh'
    },
    // Additional projects would be defined here
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and deadlines with real-time updates.',
      longDescription: 'This task management application helps users organize their work and personal projects efficiently. It features drag-and-drop task organization, deadline reminders, and collaboration tools for team projects. The application uses real-time updates to ensure all team members are always seeing the most current information.',
      image: 'https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gallery: [
        'https://images.pexels.com/photos/6177589/pexels-photo-6177589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/6177527/pexels-photo-6177527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/6177505/pexels-photo-6177505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ],
      technologies: ['React', 'Firebase', 'Material UI', 'React DnD', 'Google Authentication'],
      category: 'Web Development',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
      features: [
        'Drag-and-drop task organization',
        'Project and task categorization',
        'Deadline tracking with reminders',
        'Team collaboration tools',
        'Real-time updates',
        'Mobile responsive design'
      ],
      client: 'XYZ Productivity',
      date: 'March 2023',
      role: 'Frontend Developer',
      location: 'Remote'
    },

     // Additional projects would be defined here
    {
      id: 3,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and deadlines with real-time updates.',
      longDescription: 'This task management application helps users organize their work and personal projects efficiently. It features drag-and-drop task organization, deadline reminders, and collaboration tools for team projects. The application uses real-time updates to ensure all team members are always seeing the most current information.',
      image: 'https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gallery: [
        'https://images.pexels.com/photos/6177589/pexels-photo-6177589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/6177527/pexels-photo-6177527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/6177505/pexels-photo-6177505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ],
      technologies: ['React', 'Firebase', 'Material UI', 'React DnD', 'Google Authentication'],
      category: 'Web Development',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
      features: [
        'Drag-and-drop task organization',
        'Project and task categorization',
        'Deadline tracking with reminders',
        'Team collaboration tools',
        'Real-time updates',
        'Mobile responsive design'
      ],
      client: 'XYZ Productivity',
      date: 'March 2023',
      role: 'Frontend Developer',
      location: 'Remote'
    },

    
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = +params['id'];
      this.loadProject();
    });
  }

  loadProject(): void {
    // In a real app, this would be a service call to fetch the project
    const project = this.projects.find(p => p.id === this.projectId);
    
    if (project) {
      this.project = project;
    } else {
      // Handle project not found
      console.error('Project not found');
    }
  }
}