import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Theme } from '../../../core/service/theme/theme';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-footer-card',
  imports: [RouterLink, MatIcon],
  templateUrl: './footer-card.html',
  styleUrl: './footer-card.scss'
})
export class FooterCard {
  currentYear = new Date().getFullYear();
  isDarkTheme: boolean = true;
  constructor(private themeService: Theme,) {
    // Initialize any necessary properties or services here
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.isDarkTheme = this.themeService.getCurrentTheme();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    this.isDarkTheme = this.themeService.getCurrentTheme();
  }
}
