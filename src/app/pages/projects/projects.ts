import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.css']
})
export class Projects implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    // Initialize AOS animations if you're using them
    if (isPlatformBrowser(this.platformId)) {
      // AOS initialization would go here if you're using it
      // import AOS from 'aos';
      // AOS.init({
      //   duration: 800,
      //   once: true,
      //   offset: 100
      // });
    }
  }
}