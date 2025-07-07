import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],  // <-- das brauchst du
  templateUrl: './products.html'
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'Bohrmaschine', description: 'Starke Bohrmaschine', image: 'assets/bohrmaschine.jpg', pricePerDay: 15 },
    { id: 2, name: 'Rasenmäher', description: 'Elektrischer Rasenmäher', image: 'assets/rasenmaeher.jpg', pricePerDay: 25 },
    { id: 3, name: 'Hochdruckreiniger', description: 'Für starke Reinigung', image: 'assets/hochdruckreiniger.jpg', pricePerDay: 20 }
  ];
}
