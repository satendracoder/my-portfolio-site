import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SSetStorage {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  // Check if we're in the browser environment
  private isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  // Set item in sessionStorage if in the browser
  setsessionStorage(key: string, value: any): void {
    if (this.isBrowser()) {
      try {
        sessionStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.error('Error saving to sessionStorage', e);
      }
    }
  }

  // Get item from sessionStorage if in the browser
  getsessionStorage(key: string): any {
    if (this.isBrowser()) {
      try {
        const value = sessionStorage.getItem(key);
        return value ? JSON.parse(value) : null;
      } catch (e) {
        console.error('Error retrieving from sessionStorage', e);
        return null;
      }
    }
    return null;
  }

  // Remove item from sessionStorage if in the browser
  removesessionStorage(key: string): void {
    if (this.isBrowser()) {
      try {
        sessionStorage.removeItem(key);
      } catch (e) {
        console.error('Error removing from sessionStorage', e);
      }
    }
  }

  // Set item in sessionStorage if in the browser
  setSessionStorage(key: string, value: any): void {
    if (this.isBrowser()) {
      try {
        sessionStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
        console.error('Error saving to sessionStorage', e);
      }
    }
  }

  // Get item from sessionStorage if in the browser
  getSessionStorage(key: string): any {
    if (this.isBrowser()) {
      try {
        const value = sessionStorage.getItem(key);
        return value ? JSON.parse(value) : null;
      } catch (e) {
        console.error('Error retrieving from sessionStorage', e);
        return null;
      }
    }
    return null;
  }

  // Remove item from sessionStorage if in the browser
  removeSessionStorage(key: string): void {
    if (this.isBrowser()) {
      try {
        sessionStorage.removeItem(key);
      } catch (e) {
        console.error('Error removing from sessionStorage', e);
      }
    }
  }
}