import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from "../../../../../node_modules/@angular/router/router_module.d-BX1wlLux";

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
 contactForm!: FormGroup;
  formSubmitted = false;
  
  constructor(private meta: Meta, private titleService: Title,private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  onSubmit() {
    this.setMetaTags();
    this.formSubmitted = true;
    
    if (this.contactForm.valid) {
      // In a real app, you would send the form data to a server
      console.log('Form submitted:', this.contactForm.value);
      
      // Reset the form
      this.contactForm.reset();
      this.formSubmitted = false;
      
      // Show success message
      alert('Your message has been sent. Thank you!');
    } else {
      // Trigger validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });
    }
  }
  
  // Helper methods for validation
  get f() {
    return this.contactForm.controls;
  }
  
  isInvalid(field: string) {
    const control = this.contactForm.get(field);
    return control?.invalid && (control?.dirty || control?.touched);
  }

  OnRedirect(){
    debugger
    window.location.href = 'https://www.satendracoder.com/ask-me-anything';
  }

  setMetaTags(): void {
    const pageTitle = 'Contact Satendra Rajput | Hire Angular & Java Full Stack Developer';
    const pageDescription = 'Get in touch with Satendra Rajput, a Full Stack Developer with expertise in Angular and Java Spring Boot. Available for full-time roles, freelance, and collaboration.';
    const imageUrl = 'https://satendrasde.vercel.app/assets/images/meta-profile.jpg'; // ✅ Replace with your actual image
    const pageUrl = 'https://satendrasde.vercel.app/contact';

    this.titleService.setTitle(pageTitle);

    this.meta.updateTag({ name: 'description', content: pageDescription });
    this.meta.updateTag({ name: 'author', content: 'Satendra Rajput' });
    this.meta.updateTag({ name: 'keywords', content: 'Contact Satendra Coder, Hire Angular Developer, Full Stack Developer India, Java Spring Boot Developer, Developer Contact Noida, Web Developer Hire' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // Open Graph
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