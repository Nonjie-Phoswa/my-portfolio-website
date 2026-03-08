import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  roles: string[] = [
    'Web Developer',
    'Frontend Developer',
    'Mobile Developer',
    'Software Engineer',
  ];

  currentRoleIndex = 0;
  displayedText = '';
  isDeleting = false;

  typingSpeed = 100;

  constructor() {
    this.type();
  }

  type() {
    const fullText = this.roles[this.currentRoleIndex];

    if (this.isDeleting) {
      this.displayedText = fullText.substring(0, this.displayedText.length - 1);
    } else {
      this.displayedText = fullText.substring(0, this.displayedText.length + 1);
    }

    let speed = this.typingSpeed;

    if (this.isDeleting) {
      speed /= 2;
    }

    if (!this.isDeleting && this.displayedText === fullText) {
      speed = 1500;
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayedText === '') {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
    }

    setTimeout(() => this.type(), speed);
  }
}
