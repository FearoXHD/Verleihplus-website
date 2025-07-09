import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:3000/send';

  constructor(private http: HttpClient) { }

  sendContactForm(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
