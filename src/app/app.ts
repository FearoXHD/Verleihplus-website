import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Hero } from './hero/hero';
import { ProductsComponent } from './products/products';
import { ContactComponent } from "./contact/contact";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, Hero, ProductsComponent, ContactComponent, RouterModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'verleihplus';
}
