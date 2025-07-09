import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  standalone: true,
  imports: [FormsModule],
})
export class Contact {
  onSubmit() {
    alert('Formular wurde abgesendet!');
  }
}
