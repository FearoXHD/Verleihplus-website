import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  templateUrl: './products.html',
  styleUrls: ['./products.scss'],
  imports: [CommonModule]
})
export class ProductsComponent {
  angebote = [
    { title: 'Motorradanhänger', 
      description: 'Ideal für den sicheren Transport deines Bikes. Hydraulisch absenkbar und mit Sicherungspunkten.', 
      image: 'assets/IMG_7039.jpg', 
      price: '35€ / Tag',
      details: '150€ Kaution. Auf Wunsch bieten wir auch einen Transportservice an. Preis nach Absprache.',
      buttonText: 'Jetzt Anfragen',
    },
    {
      title: 'Pavillion', 
      description: '3x6m Faltpavillion in weiß mit Seitenwänden. Ideal für Feste, Feiern oder als Wetterschutz.',
      image: 'assets/IMG_7055.jpg',
      price: '180€ / Wochenende',
      details: 'Lieferung & Aufbau in Kassel + 5 km inklusive. Ab 5 km: 0,50 €/km',
      buttonText: 'Jetzt Anfragen',
    },
    {
      title: 'Dj-Equipment', 
      description: 'Professionelles DJ-Equipment für deine Party. Inklusive Mixer, Lautsprecher und Mikrofon.',
      image: 'assets/dj-equipment.jpeg',
      price: '160€ / Wochenende',
      details: 'Lieferung, Aufbau & Abholung in Kassel + 5 km inklusive. Ab 5 km: 0,50 €/km',
      buttonText: 'Jetzt Anfragen',
    },
  
  ];

  scrollTo(target: string) {
  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
}

}
