import { Component } from '@angular/core';
import { SkillCard } from "../skill-card/skill-card";
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}


@Component({
  selector: 'app-skills',
  imports: [SkillCard, CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

skills: Skill[] = [
    { name: 'HTML', level: 95, icon: 'fab fa-html5', category: 'Frontend' },
    { name: 'CSS', level: 90, icon: 'fab fa-css3-alt', category: 'Frontend' },
    { name: 'JavaScript', level: 90, icon: 'fab fa-js', category: 'Frontend' },
    { name: 'TypeScript', level: 85, icon: 'fab fa-js', category: 'Frontend' },
    { name: 'Angular', level: 85, icon: 'fab fa-angular', category: 'Frontend' },
    { name: 'React', level: 80, icon: 'fab fa-react', category: 'Frontend' },
    { name: 'Vue.js', level: 75, icon: 'fab fa-vuejs', category: 'Frontend' },
    { name: 'Node.js', level: 80, icon: 'fab fa-node-js', category: 'Backend' },
    { name: 'Express', level: 75, icon: 'fas fa-server', category: 'Backend' },
    { name: 'MongoDB', level: 70, icon: 'fas fa-database', category: 'Backend' },
    { name: 'SQL', level: 75, icon: 'fas fa-database', category: 'Backend' },
    { name: 'UI/UX Design', level: 85, icon: 'fas fa-paint-brush', category: 'Design' },
    { name: 'Figma', level: 80, icon: 'fab fa-figma', category: 'Design' },
    { name: 'Responsive Design', level: 90, icon: 'fas fa-mobile-alt', category: 'Design' },
    { name: 'Git', level: 85, icon: 'fab fa-git-alt', category: 'Tools' },
    { name: 'Docker', level: 70, icon: 'fab fa-docker', category: 'Tools' }
  ];

  categories: string[] = ['All', 'Frontend', 'Backend', 'Design', 'Tools'];
  selectedCategory: string = 'All';

  filteredSkills(): Skill[] {
    if (this.selectedCategory === 'All') {
      return this.skills;
    }
    return this.skills.filter(skill => skill.category === this.selectedCategory);
  }

  changeCategory(category: string): void {
    this.selectedCategory = category;
  }
}
