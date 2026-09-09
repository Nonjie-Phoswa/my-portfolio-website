import { Component, HostListener, OnInit, inject } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  isMenuOpen = false;
  isScrolled = false;

  private router = inject(Router);

  ngOnInit() {
    this.checkScroll();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeMenu();
      }
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }

  private checkScroll() {
    if (typeof window !== 'undefined') {
      this.isScrolled = window.scrollY > 20;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  closeMenu() {
    this.isMenuOpen = false;
  }
}

