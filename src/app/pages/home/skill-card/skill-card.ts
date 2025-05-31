import { Component, Input } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-skill-card',
  imports: [],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.scss'
})
export class SkillCard {
@Input() skill!: Skill;
}
