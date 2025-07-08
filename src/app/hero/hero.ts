import { NgFor } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
  imports: [NgFor]
})
export class Hero implements AfterViewInit {

  images = [
    { src: 'assets/1.jpg', alt: 'Bild 1' },
    { src: 'assets/2.jpg', alt: 'Bild 2' },
    { src: 'assets/3.jpg', alt: 'Bild 3' },
    { src: 'assets/4.jpg', alt: 'Bild 4' }
  ];

  ngAfterViewInit() {
    const myCarousel = document.querySelector('#heroCarousel');
    if (myCarousel) {
      new bootstrap.Carousel(myCarousel, {
        interval: 5000,
        ride: 'carousel',
        pause: false,
        wrap: true
      });
    }
  }
}
