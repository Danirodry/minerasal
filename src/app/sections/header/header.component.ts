import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    // Optional: Handle focus management for accessibility
    if (this.isMobileMenuOpen) {
      // Focus first menu item when menu opens
      setTimeout(() => {
        const firstMenuItem = document.querySelector('.main-nav a');
        (firstMenuItem as HTMLElement)?.focus();
      });
    }
  }
}
