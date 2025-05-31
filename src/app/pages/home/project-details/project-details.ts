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
      title: 'E-commerce Website',
      description: 'A fully responsive e-commerce platform with product catalog, shopping cart, and payment integration.',
      longDescription: 'This e-commerce platform provides a seamless shopping experience with an intuitive user interface. Users can browse products, add them to their cart, and complete purchases through a secure payment system. The admin panel allows for easy management of products, categories, and orders.',
      image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      gallery: [
        'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
         'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      ],
      technologies: ['Angular', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'JWT Authentication'],
      category: 'Web Development',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com',
      features: [
        'Responsive product catalog with filtering and search',
        'User authentication and profile management',
        'Shopping cart with local storage persistence',
        'Secure checkout with Stripe integration',
        'Order history and tracking',
        'Admin dashboard for product and order management'
      ],
      client: 'ABC Retail',
      date: 'January 2023',
      role: 'Full-Stack Developer'
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
      role: 'Frontend Developer'
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
      role: 'Frontend Developer'
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