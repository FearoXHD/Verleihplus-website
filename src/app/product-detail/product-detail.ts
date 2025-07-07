import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  pricePerDay: number;
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.html',
  imports: [CommonModule]
})
export class ProductDetailComponent implements OnInit {
  product?: Product;

  products: Product[] = [
    { id: 1, name: 'Motorradanhänger', description: 'Hydraulischer Motorradanhänger', image: 'assets/bohrmaschine.jpg', pricePerDay: 35 },
    { id: 2, name: 'Rasenmäher', description: 'Elektrischer Rasenmäher', image: 'assets/rasenmaeher.jpg', pricePerDay: 25 },
    { id: 3, name: 'Hochdruckreiniger', description: 'Für starke Reinigung', image: 'assets/hochdruckreiniger.jpg', pricePerDay: 20 }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === id);
  }
}