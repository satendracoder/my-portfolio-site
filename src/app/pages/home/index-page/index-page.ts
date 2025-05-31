import { Component } from '@angular/core';
import { MenuCard } from "../menu-card/menu-card";
import { FooterCard } from "../footer-card/footer-card";
import { BannerCard } from "../banner-card/banner-card";
import { NewsletterCard } from "../newsletter-card/newsletter-card";

@Component({
  selector: 'app-index-page',
  imports: [MenuCard, FooterCard, BannerCard, NewsletterCard],
  templateUrl: './index-page.html',
  styleUrl: './index-page.scss'
})
export class IndexPage {

}
