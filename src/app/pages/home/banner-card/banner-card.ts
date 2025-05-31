import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-card',
  imports: [],
  templateUrl: './banner-card.html',
  styleUrl: './banner-card.scss'
})
export class BannerCard {

roles: string[] = ['UI/UX Designer', 'Web Developer', 'Mobile Developer', 'Software Engineer'];
  currentRoleIndex = 0;
  currentRole = '';
  typingSpeed = 100; // ms per character
  eraseSpeed = 50; // ms per character
  delayAfterTyping = 2000; // ms to wait after typing
  delayAfterErasing = 500; // ms to wait after erasing

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.typeText();
  }

  typeText(): void {
    const role = this.roles[this.currentRoleIndex];
    let charIndex = 0;

    // Type the current role
    const typeInterval = setInterval(() => {
      if (charIndex < role.length) {
        this.currentRole += role.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typeInterval);
        
        // Wait before erasing
        setTimeout(() => {
          this.eraseText();
        }, this.delayAfterTyping);
      }
    }, this.typingSpeed);
  }

  eraseText(): void {
    // Erase the current role
    const eraseInterval = setInterval(() => {
      if (this.currentRole.length > 0) {
        this.currentRole = this.currentRole.slice(0, -1);
      } else {
        clearInterval(eraseInterval);
        
        // Move to next role
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        
        // Wait before typing the next role
        setTimeout(() => {
          this.typeText();
        }, this.delayAfterErasing);
      }
    }, this.eraseSpeed);
  }
}
