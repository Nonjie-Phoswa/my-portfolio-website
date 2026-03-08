import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home implements AfterViewInit {
  ngAfterViewInit() {
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
