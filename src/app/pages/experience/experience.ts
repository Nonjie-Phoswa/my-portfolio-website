import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class Experience implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeScrollProgress();
    }
  }

  /**
   * Animates the timeline progress line as the user scrolls
   * through the experience section, creating a "journey" feel.
   */
  private initializeScrollProgress(): void {
    const timeline = document.querySelector('.timeline');
    const progress = document.querySelector('.timeline-progress') as HTMLElement;

    if (!timeline || !progress) return;

    const updateProgress = () => {
      const timelineRect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far the timeline has been scrolled through
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;

      // Start progress when timeline enters viewport, complete when it leaves
      const startPoint = windowHeight * 0.8;
      const endPoint = -timelineHeight + windowHeight * 0.3;

      let scrollProgress = (startPoint - timelineTop) / (startPoint - endPoint);
      scrollProgress = Math.max(0, Math.min(1, scrollProgress));

      progress.style.height = `${scrollProgress * 100}%`;
    };

    // Initial call
    updateProgress();

    // Update on scroll
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });
  }
}
