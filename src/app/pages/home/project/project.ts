import { Component } from '@angular/core';
import { ProjectCard } from "../project-card/project-card";
import { CommonModule } from '@angular/common';
interface Project_1 {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl: string;
  codeUrl: string;
}
@Component({
  selector: 'app-project',
  imports: [ProjectCard, CommonModule],
  templateUrl: './project.html',
  styleUrl: './project.scss'
})
export class Project {
projects: Project_1[] = [
   {
      id: 1,
      title: 'FineQuick Multi-Utility SaaS Platform',
      description: 'Built Fine Quick, a SaaS platform with 150+ productivity tools using Angular & Spring Boot...',
      image: '/assets/images/projects/finequick_web/home.png',
      technologies: ['HTML/CSS', 'Angular/TypeScript', 'Java', 'JWT', 'Spring Boot', 'MySQL'],
      category: 'Fine Quick',
      demoUrl: 'https://www.finequick.com/',
      codeUrl: 'https://github.com/satendrasde'
    },
    {
      id: 2,
      title: 'Fintech Platform',
      description: 'Contributing to the development of a comprehensive Fintech platform offering a wide range of banking...',
      image: '/assets/images/projects/redmil_fintech/login.png',
      technologies: ['HTML/CSS', 'Angular/TypeScript', 'Java', 'RESTful APIs', 'Spring Boot', 'MySQL'],
      category: 'Redmil',
      demoUrl: 'https://web.redmilbusinessmall.com/login',
      codeUrl: 'https://github.com/satendrasde'
    },

    {
      id: 3,
      title: 'Jan Samarth Referred Cases Dashboard (Angular)',
      description: 'Developed a fully functional Angular dashboard for Jan Samarth referred case reporting and management...',
      image: '/assets/images/projects/redmil_hdfc/login.png',
      technologies: ['HTML/CSS', 'JavaScript/TypeScript','Angular', 'Material UI'],
      category: 'Redmil',
      demoUrl: 'https://hdfc.betterbottech.ai/login',
      codeUrl: 'https://github.com/satendrasde'
    },

    {
      id: 4,
      title: 'Online Gambling Platform',
      description: 'Developed key frontend modules for an online gambling platform, including login, transactions, QR code payments, and player registration forms...',
      image: '/assets/images/projects/webconvoy_gaming/login.png',
      technologies: ['HTML/CSS', 'JavaScript/TypeScript','Angular', 'Material UI'],
      category: 'Webconvoy',
      demoUrl: 'https://poker9club.casino/',
      codeUrl: 'https://github.com/satendrasde'
    },

    {
      id: 5,
      title: 'PPF(Paint Protection Film)',
      description: 'Designed and developed a responsive and dynamic web application for showcasing and managing Paint Protection Film (PPF) services and products...',
      image: '/assets/images/projects/webconvoy_ppf/home.png',
      technologies: ['HTML/CSS','JavaScript','TypeScript','Angular','Material UI','', 'MEAN Stack',],
      category: 'Webconvoy',
      demoUrl: 'https://eazycool.com.sg/',
      codeUrl: 'https://github.com/satendrasde'
    },

    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects, skills, and professional experience.',
      image: 'https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Angular', 'SCSS', 'TypeScript'],
      category: 'Web Development',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com'
    },
    {
      id: 7,
      title: 'Recipe Finder',
      description: 'A culinary application for discovering recipes based on available ingredients and dietary preferences.',
      image: 'https://images.pexels.com/photos/8472854/pexels-photo-8472854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Vue.js', 'Vuex', 'Node.js', 'MongoDB'],
      category: 'Web Development',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com'
    }
  ];

  categories: string[] = ['All', 'Fine Quick', 'Redmil', 'Webconvoy','Collage & Myself',];
  selectedCategory: string = 'All';

  filteredProjects(): Project_1[] {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedCategory);
  }

  changeCategory(category: string): void {
    this.selectedCategory = category;
  }
}
