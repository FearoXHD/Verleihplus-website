import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

@Component({
  standalone: true,
  selector: 'app-impressum',
  imports: [CommonModule, Header, Footer],
  templateUrl: './impressum.html',
  styleUrl: './impressum.scss'
})
export class Impressum {

}
