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
      title: 'Fintech Platform',
      description: 'Contributing to the development of a comprehensive Fintech platform offering a wide range of banking, payment, and business services..',
      image: '/assets/images/projects/redmil_fintech/login.png',
      technologies: ['HTML/CSS', 'Angular/TypeScript', 'Java', 'RESTful APIs', 'Spring Boot', 'MySQL'],
      category: 'Redmil',
      demoUrl: 'https://web.redmilbusinessmall.com/login',
      codeUrl: 'https://github.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and deadlines with real-time updates.',
      image: 'https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'Firebase', 'Material UI'],
      category: 'Web Development',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com'
    },
    {
      id: 3,
      title: 'Fitness Tracker',
      description: 'A mobile application for tracking workouts, nutrition, and health metrics with visual data representation.',
      image: 'https://images.pexels.com/photos/6111582/pexels-photo-6111582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB'],
      category: 'Mobile Development',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather application providing real-time forecasts, historical data, and location-based services.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['JavaScript', 'OpenWeather API', 'HTML', 'CSS'],
      category: 'Web Development',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects, skills, and professional experience.',
      image: 'https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Angular', 'SCSS', 'TypeScript'],
      category: 'Web Development',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com'
    },
    {
      id: 6,
      title: 'Recipe Finder',
      description: 'A culinary application for discovering recipes based on available ingredients and dietary preferences.',
      image: 'https://images.pexels.com/photos/8472854/pexels-photo-8472854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['Vue.js', 'Vuex', 'Node.js', 'MongoDB'],
      category: 'Web Development',
      demoUrl: 'https://example.com',
      codeUrl: 'https://github.com'
    }
  ];

  categories: string[] = ['All', 'Redmil', 'Webconvoy', 'Fine Quick','Collage & myself',];
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
