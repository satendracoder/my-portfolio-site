import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer-card',
  imports: [RouterLink],
  templateUrl: './footer-card.html',
  styleUrl: './footer-card.scss'
})
export class FooterCard {
currentYear = new Date().getFullYear();
}
