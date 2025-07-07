import { Routes } from '@angular/router';
import { Hero } from './hero/hero';
import { ProductsComponent } from './products/products';
import { ProductDetailComponent } from './product-detail/product-detail';

export const routes: Routes = [
  { path: '', component: Hero },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: '**', redirectTo: '' }
];
