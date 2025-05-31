import { Component } from '@angular/core';

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
  companies:any = [
    {
      name: 'Fine Quick Solutions',
      icon: '/assets/images/fine_quick.svg',
      duration: 'June 2025 - Present (Part-time)',
      degination: "Software Engineer",
      location: 'Greate Noida, Uttar Pradesh · Remote',
      points: [
        'White Labeled NextGen LMS',
        'Platform for educators and creators',
        'Custom branding & analytics for each creator'
      ]
    },
    {
      name: 'Redmil Business (Rejoin)',
      icon: '/assets/images/redmil.jpeg',
      duration: 'Sep 2024 - Present',
      degination: "Full Stack Developer",
      location: 'Sector 142 Noida, Uttar Pradesh · On-site',
      points: [
        'White Labeled NextGen LMS',
        'Platform for educators and creators',
        'Custom branding & analytics for each creator'
      ]
    },
    {
      name: 'WebConvoy Pvt Ltd',
      icon: '/assets/images/webconvoy.jpeg',
      duration: 'May 2024 - Aug 2024',
      degination: "Angular Developer",
      location: 'H-159, Sector 63, Noida, Uttar Pradesh, India · On-site',
      points: [
        'AR/VR integration for education',
        'Built immersive classroom experiences',
        'Team management and module scaling'
      ]
    },
    {
      name: 'Redmil Business Mall',
      icon: '/assets/images/redmil.jpeg',
      duration: 'Apr 2022 - Apr 2024',
      degination: "Angular Developer",
      location: 'Sector 62 Noida, Uttar Pradesh, India · On-site',
      points: [
        'Voice-enabled automation',
        'Customer engagement solutions',
        'Handled backend integration and front-end UI'
      ]
    },
    {
      name: 'Caria Electronics',
      icon: 'assets/icons/emitrr.png',
      duration: 'Sep 2021 - Mar 2022',
      degination: "Executive Assistant",
      location: 'B18, Block B, Sector 85, Noida, Uttar Pradesh',
      points: [
        'Voice-enabled automation',
        'Customer engagement solutions',
        'Handled backend integration and front-end UI'
      ]
    },
  ];

  selectedCompany = this.companies[0];

  selectCompany(company: any) {
    this.selectedCompany = company;
  }
}
