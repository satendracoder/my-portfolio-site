import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-menu-card',
  imports: [CommonModule, RouterLinkActive, RouterLink],
  templateUrl: './menu-card.html',
  styleUrl: './menu-card.scss'
})
export class MenuCard {

 isScrolled = false;
  menuOpen = false;
  activeSection = 'home';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Extract the section from the URL
      const path = event.urlAfterRedirects.split('/')[1] || 'home';
      this.activeSection = path;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
