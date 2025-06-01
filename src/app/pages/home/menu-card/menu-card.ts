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

menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    document.body.style.overflow = this.menuOpen ? 'hidden' : 'auto';
  }

  closeMenu() {
    this.menuOpen = false;
    document.body.style.overflow = 'auto';
  }
}