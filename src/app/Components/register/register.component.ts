import { Component, EventEmitter, Output } from '@angular/core';
import {
  ContactService,
  ContactRegistrationDto,
} from '../../Services/contact.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  @Output() registerClicked = new EventEmitter<void>();

  governorates: string[] = [
    'Cairo',
    'Alexandria',
    'Giza',
    'Dakahlia',
    'Sharqia',
    'Qalyubia',
    'Kafr El Sheikh',
    'Gharbia',
    'Monufia',
    'Beheira',
    'Ismailia',
    'Port Said',
    'Suez',
    'Damietta',
    'Fayoum',
    'Beni Suef',
    'Minya',
    'Assiut',
    'Sohag',
    'Qena',
    'Luxor',
    'Aswan',
    'Red Sea',
    'New Valley',
    'Matrouh',
    'North Sinai',
    'South Sinai',
  ];

  model: ContactRegistrationDto = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    password: '',
    government: 0,
    address: '',
    nationalId: '',
  };

  isLoading = false;
  confirmPassword = '';
  message = '';
  error = '';

  constructor(private contactService: ContactService) {}

  get passwordMismatch(): boolean {
    return (
      this.model.password !== this.confirmPassword &&
      this.confirmPassword.length > 0
    );
  }

  onRegister(): void {
    if (this.isLoading) return;
    this.error = '';
    this.message = '';

    if (
      !this.model.firstname ||
      !this.model.lastname ||
      !this.model.email ||
      !this.model.password ||
      !this.confirmPassword ||
      !this.model.nationalId
    ) {
      this.error = 'Please fill in all required fields.';
      return;
    }

    if (this.passwordMismatch) {
      this.error = 'Passwords do not match.';
      return;
    }
    this.isLoading = true;
    this.contactService.register(this.model).subscribe({
      next: (res) => {
        this.message = res.message || 'Registration successful!';
        this.error = '';
        this.onRegisterClick();
        console.log('✅ Registration successful:', res);
        this.isLoading = false;
      },
      error: (err) => {
        this.message = '';
        this.error = err?.error?.message || 'Registration failed.';
        this.isLoading = false;
      },
    });
  }

  onRegisterClick() {
    this.registerClicked.emit();
  }
}
