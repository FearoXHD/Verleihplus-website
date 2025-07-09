import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.html',
  styleUrl: './products.scss',
  imports: [NgFor]
})
export class ProductsComponent {
  angebote = [
    { title: 'Motorradanhänger', 
      description: 'Ideal für den sicheren Transport deines Bikes. Hydraulisch absenkbar und mit Sicherungspunkten.', 
      image: 'assets/IMG_7039.jpg', 
      pricePerDay: 35,
      buttonText: 'Jetzt Anfragen',
    }
  ];

  scrollTo(target: string) {
  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
}

}
