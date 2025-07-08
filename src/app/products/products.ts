import { Component } from '@angular/core';
import { CurrencyPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.html',
  styleUrl: './products.scss',
  imports: [NgFor, CurrencyPipe]
})
export class ProductsComponent {
  angebote = [
    { title: 'Motorradanhänger', 
      description: 'Ideal für den sicheren Transport deines Bikes. Hydraulisch absenkbar und mit Sicherungspunkten.', 
      image: 'assets/IMG_7039.jpg', 
      pricePerDay: 35 
    }
  ];

  scrollTo(target: string) {
  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
}

}
