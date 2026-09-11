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
        const filter = button.getAttribute('data-filter') ?? 'all';

        filterButtons.forEach(btn => {
          btn.classList.toggle('active', btn === button);
        });

        certificateCards.forEach(card => {
          const element = card as HTMLElement;
          const categories = (
            element.getAttribute('data-categories') ??
            element.getAttribute('data-category') ??
            ''
          )
            .split(/\s+/)
            .filter(Boolean);

          const matches = filter === 'all' || categories.includes(filter);

          element.classList.toggle('hidden', !matches);
          element.style.animation = matches ? 'fadeIn 0.5s ease forwards' : 'none';
        });
      });
    });
  }
}