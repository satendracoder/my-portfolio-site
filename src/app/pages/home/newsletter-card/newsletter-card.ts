import { Component } from '@angular/core';

@Component({
  selector: 'app-newsletter-card',
  imports: [],
  templateUrl: './newsletter-card.html',
  styleUrl: './newsletter-card.scss'
})
export class NewsletterCard {

  sendurl(){
    window.open('https://satendracoder.com', '_blank');
    return false;
  }
}
