import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from '../contact/contact.service';
import { FormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
  imports: [ FormsModule, CommonModule ],
  providers: [ContactService]
})
export class ContactComponent {

  constructor(private contactService: ContactService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.contactService.sendContactForm(form.value).subscribe({
        next: (res: any) => {
          alert('Nachricht wurde erfolgreich gesendet!');
          form.reset();
        },
        error: (err: any) => {
          alert('Fehler beim Senden der Nachricht.');
        }
      });
    }
  }
}
