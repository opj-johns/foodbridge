import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
// import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isMobileMenuOpen = false;

  constructor(private router: Router) { }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  signin() {
    this.router.navigate(['/login']);
    // throw new Error('Method not implemented.');
  }
  donate() {
    this.router.navigate(['/donate']);
    // throw new Error('Method not implemented.');
  }
}
