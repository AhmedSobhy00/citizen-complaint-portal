import { Component } from '@angular/core';
import { ContactService, ContactReadDto } from '../../Services/contact.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  email = '';
  password = '';
  userData: ContactReadDto | null = null;
  errorMessage: string = '';

  constructor(private loginService: ContactService) {}

  onLogin() {
    this.loginService.login(this.email, this.password).subscribe({
      next: (data) => {
        this.userData = data;
        this.errorMessage = '';
        console.log('✅ Login successful:', data);
      },
      error: (err) => {
        this.userData = null;
        this.errorMessage = err?.error?.message || 'Login failed';
        console.error('❌ Login error:', err);
      }
    });
  }
}
