import { Injectable, Renderer2, RendererFactory2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SSetStorage } from '../storage/sset-storage';

@Injectable({
  providedIn: 'root'
})
export class Theme {
  private renderer: Renderer2;
  private isDarkTheme: boolean = false;
  private isBrowser: boolean;

  constructor(
    rendererFactory: RendererFactory2,
    private storageService: SSetStorage,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      const savedTheme = this.storageService.getsessionStorage('isDarkTheme');
      if (savedTheme !== null) {
        this.isDarkTheme = JSON.parse(savedTheme);
      } else {
        this.storageService.setSessionStorage('isDarkTheme', JSON.stringify(this.isDarkTheme));
      }
      this.applyTheme(this.isDarkTheme);
    }
  }

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.isBrowser) {
      this.storageService.setSessionStorage('isDarkTheme', JSON.stringify(this.isDarkTheme));
      this.applyTheme(this.isDarkTheme);
    }
  }

  applyTheme(isDark: boolean) {
    if (!this.isBrowser) return; // Avoid accessing document on the server

    const body = document.body;
    if (isDark) {
      this.renderer.removeClass(body, 'light-theme');
      this.renderer.addClass(body, 'dark-theme');
    } else {
      this.renderer.removeClass(body, 'dark-theme');
      this.renderer.addClass(body, 'light-theme');
    }
  }

  getCurrentTheme() {
    return this.isDarkTheme;
  }
}
