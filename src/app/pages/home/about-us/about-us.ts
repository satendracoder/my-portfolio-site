import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [RouterLink],
  templateUrl: './about-us.html',
  styleUrl: './about-us.scss'
})
export class AboutUs {

  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit(): void {
    this.setMetaTags();
  }

  setMetaTags(): void {
    const pageTitle = 'About Satendra Rajput | Full Stack Developer - Angular & Java Spring Boot';
    const pageDescription = 'Satendra Rajput is a passionate Full Stack Developer with 3+ years of experience in Angular and Java Spring Boot. Explore his journey, projects, and tech expertise.';
    const imageUrl = 'https://satendrasde.vercel.app/assets/images/meta-profile.jpg'; // ✅ Replace with your actual image URL
    const pageUrl = 'https://satendrasde.vercel.app/about';

    this.titleService.setTitle(pageTitle);

    this.meta.updateTag({ name: 'description', content: pageDescription });
    this.meta.updateTag({ name: 'author', content: 'Satendra Rajput' });
    this.meta.updateTag({ name: 'keywords', content: 'Satendra Rajput, Angular Developer, Full Stack Developer, Java Spring Boot, Fintech Projects, Developer Portfolio, Noida Developer' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // Open Graph (Facebook, LinkedIn, etc.)
    this.meta.updateTag({ property: 'og:title', content: pageTitle });
    this.meta.updateTag({ property: 'og:description', content: pageDescription });
    this.meta.updateTag({ property: 'og:image', content: imageUrl });
    this.meta.updateTag({ property: 'og:url', content: pageUrl });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: pageTitle });
    this.meta.updateTag({ name: 'twitter:description', content: pageDescription });
    this.meta.updateTag({ name: 'twitter:image', content: imageUrl });
  }
}
