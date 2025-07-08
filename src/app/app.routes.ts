import { RouterModule, Routes } from '@angular/router';
import { Hero } from './hero/hero';
import { ProductsComponent } from './products/products';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: Hero },
  { path: 'products', component: ProductsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'disabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}