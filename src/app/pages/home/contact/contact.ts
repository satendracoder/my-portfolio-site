import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
 contactForm!: FormGroup;
  formSubmitted = false;
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }
  
  onSubmit() {
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
}