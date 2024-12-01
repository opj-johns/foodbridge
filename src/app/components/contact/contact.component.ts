import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  onSubmit(): void {
    // Add your form submission logic here
    alert('Thank you for reaching out! We’ll get back to you soon.');
  }
}
