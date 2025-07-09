import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

@Component({
  standalone: true,
  selector: 'app-datenschutz',
  imports: [CommonModule, Header, Footer],
  templateUrl: './datenschutz.html',
  styleUrl: './datenschutz.scss'
})
export class Datenschutz {

}
