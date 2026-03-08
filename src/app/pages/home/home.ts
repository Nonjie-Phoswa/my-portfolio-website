import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    // only initialize Typed.js in the browser where `document` is available
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        strings: ['Web Developer', 'Frontend Developer', 'Mobile Developer', 'Software Engineer'],
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 1500,
        loop: true,
      };

      new Typed('#typed-text', options);
    }
  }
}
