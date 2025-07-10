import { Component } from '@angular/core';
import { ContactService, ContactRegistrationDto } from '../../Services/contact.service';
import { from } from 'rxjs';  
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register',
   imports: [FormsModule,CommonModule], 
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
model: ContactRegistrationDto = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    username: '',
    password: '',
    government:0,
    address: '',
    nationalId: ''
  };

  message = '';
  error = '';

  constructor(private contactService: ContactService) {}

  onRegister() {
    this.contactService.register(this.model).subscribe({
      next: (res) => {
        this.message = res.message;
        this.error = '';
      },
      error: (err) => {
        this.message = '';
        this.error = err?.error?.message || 'Registration failed.';
      }
    });
  }
}
