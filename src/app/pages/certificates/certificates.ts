import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.html',
  styleUrls: ['./certificates.css']
})
export class Certificates implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeFilters();
    }
  }

  private initializeFilters(): void {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const certificateCards = document.querySelectorAll('.certificate-card');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        // Update active state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter cards with smooth animation
        certificateCards.forEach(card => {
          const category = card.getAttribute('data-category');
          const element = card as HTMLElement;

          if (filter === 'all' || category === filter) {
            element.classList.remove('hidden');
            element.style.animation = 'fadeIn 0.5s ease forwards';
          } else {
            element.classList.add('hidden');
          }
        });
      });
    });
  }
}