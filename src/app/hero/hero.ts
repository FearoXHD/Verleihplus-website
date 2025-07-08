import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  imports: [NgFor]
})
export class Hero implements OnInit {
  images = [
    { src: 'assets/1.jpg', alt: 'Bild 1' },
    { src: 'assets/2.jpg', alt: 'Bild 2' },
    { src: 'assets/3.jpg', alt: 'Bild 3' },
    { src: 'assets/4.jpg', alt: 'Bild 4' }
  ];

  scrollTo(target: string) {
  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
}

  activeIndex = 0;

  ngOnInit() {
    setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
    }, 3000);
  }
}
