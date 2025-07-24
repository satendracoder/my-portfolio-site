import { Component } from '@angular/core';
import { ProjectCard } from "../project-card/project-card";
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
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
 constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit(): void {
    this.setMetaTags();
  }

projects: Project_1[] = [
  // 1_SSBrinet Innovations 
   {
      id: 1,
      title: 'SSBrinet Multi-Utility SaaS Platform',
      description: 'Built SSBrinet Innovations, a SaaS platform with 150+ productivity tools using Angular & Spring Boot...',
      image: '/assets/images/projects/finequick_web/home.png',
      technologies: ['HTML/CSS', 'Angular/TypeScript', 'Java', 'JWT', 'Spring Boot', 'MySQL'],
      category: 'SSBrinet Innovations',
      demoUrl: 'https://www.SSBrinet.com/',
      codeUrl: 'https://github.com/satendracoder'
    },

    // 2_Redmil Fintech 
    {
      id: 2,
      title: 'Fintech Platform',
      description: 'Contributing to the development of a comprehensive Fintech platform offering a wide range of banking...',
      image: '/assets/images/projects/redmil_fintech/login.png',
      technologies: ['HTML/CSS', 'Angular/TypeScript', 'Java', 'RESTful APIs', 'Spring Boot', 'MySQL'],
      category: 'Redmil',
      demoUrl: 'https://web.redmilbusinessmall.com/login',
      codeUrl: 'https://github.com/satendracoder'
    },

    // 3_Redmil HDFC
    {
      id: 3,
      title: 'Jan Samarth Referred Cases Dashboard (Angular)',
      description: 'Developed a fully functional Angular dashboard for Jan Samarth referred case reporting and management...',
      image: '/assets/images/projects/redmil_hdfc/login.png',
      technologies: ['HTML/CSS', 'JavaScript/TypeScript','Angular', 'Material UI'],
      category: 'Redmil',
      demoUrl: 'https://hdfc.betterbottech.ai/login',
      codeUrl: 'https://github.com/satendracoder'
    },

    // 4_Webconvoy Gaming Platform
    {
      id: 4,
      title: 'Online Gambling Platform',
      description: 'Developed key frontend modules for an online gambling platform, including login, transactions, QR code payments, and player registration forms...',
      image: '/assets/images/projects/webconvoy_gaming/login.png',
      technologies: ['HTML/CSS', 'JavaScript/TypeScript','Angular', 'Material UI'],
      category: 'Webconvoy',
      demoUrl: 'https://poker9club.casino/',
      codeUrl: 'https://github.com/satendracoder'
    },

    // 5_Webconvoy PPF(Paint Protection Film)
    {
      id: 5,
      title: 'PPF(Paint Protection Film)',
      description: 'Designed and developed a responsive and dynamic web application for showcasing and managing Paint Protection Film (PPF) services and products...',
      image: '/assets/images/projects/webconvoy_ppf/home.png',
      technologies: ['HTML/CSS','JavaScript','TypeScript','Angular','Material UI','', 'MEAN Stack',],
      category: 'Webconvoy',
      demoUrl: 'https://eazycool.com.sg/',
      codeUrl: 'https://github.com/satendracoder'
    },

    //_6 Port Portfolio Website
    {
      id: 6,
      title: 'Personal Portfolio Website',
      description: 'A personal portfolio website showcasing projects, skills, and professional experience.',
      image: '/assets/images/projects/portfolio_myself/homelight.png',
      technologies: ['HTML','CSS','Angular', 'TypeScript', 'Material UI', 'Java Spring Boot', 'Rest APIs'],
      category: 'Collage & Myself',
      demoUrl: 'https://satendrasde.vercel.app/',
      codeUrl: 'https://github.com/satendracoder'
    },

    // Collage time Project
    {
      id: 7,
      title: 'Study Library (College Major Project)',
      description: 'Study Library is an online educational platform designed to assist students, parents, and education stakeholders in accessing...',
      image: '/assets/images/projects/lms_myself/home.jpg',
      technologies: ['HTML', 'CSS','TypeScript','Angular_12', 'Material UI', 'Bootstrap'],
      category: 'Collage & Myself',
      demoUrl: 'https://satendrasde.com/contact',
      codeUrl: 'https://github.com/satendracoder'
    }
  ];

  categories: string[] = ['All', 'SSBrinet Innovations', 'Redmil', 'Webconvoy','Collage & Myself',];
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



  setMetaTags(): void {
    const pageTitle = 'Projects by Satendra Rajput | Angular & Java Full Stack Developer';
    const pageDescription = 'Explore major projects built by Satendra Rajput, including FineQuick SaaS, Fintech platforms, dashboards, PPF apps, and more using Angular, Java Spring Boot, and MySQL.';
    const imageUrl = 'https://satendrasde.vercel.app/assets/images/meta-projects.jpg'; // ✅ Replace with actual thumbnail or banner
    const pageUrl = 'https://satendrasde.vercel.app/projects';

    this.titleService.setTitle(pageTitle);

    this.meta.updateTag({ name: 'description', content: pageDescription });
    this.meta.updateTag({ name: 'author', content: 'Satendra Rajput' });
    this.meta.updateTag({ name: 'keywords', content: 'Satendra Coder Projects, Angular Projects, Java Spring Boot Portfolio, Fintech Dashboard, SaaS Platform, FineQuick, Webconvoy, PPF, Gambling Platform, Jan Samarth Dashboard, Study Library' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // Open Graph (for LinkedIn/Facebook sharing)
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
