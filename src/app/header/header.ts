import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  scrollTo(target: string) {
  document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
}
}
