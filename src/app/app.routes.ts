import { RouterModule, Routes } from '@angular/router';
import { Hero } from './hero/hero';
import { ProductsComponent } from './products/products';
import { Impressum } from './impressum/impressum';
import { Datenschutz } from './datenschutz/datenschutz';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: Hero },
  { path: 'products', component: ProductsComponent },
  { path: 'impressum', component: Impressum },
  { path: 'datenschutz', component: Datenschutz },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'disabled' })],
  exports: [RouterModule]
})
export class AppRoutes {}