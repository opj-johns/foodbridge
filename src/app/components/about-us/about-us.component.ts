import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  images: string[] = [
    'salam.jpg',
    'john.png',
  ];
  currentImageIndex: number = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 2500); // 6 seconds interval
  }

  pauseCarousel(): void {
    clearInterval(this.intervalId);
  }

  resumeCarousel(): void {
    this.startCarousel();
  }
}
