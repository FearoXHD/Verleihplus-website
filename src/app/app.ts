import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Hero } from './hero/hero';
import { ProductsComponent } from './products/products';
import { Contact } from "./contact/contact";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, Hero, ProductsComponent, Contact, RouterModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  title = 'verleihplus';
}
