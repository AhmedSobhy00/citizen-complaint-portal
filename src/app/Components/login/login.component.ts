import { Component, EventEmitter, Output } from '@angular/core';
import { ContactService, ContactReadDto } from '../../Services/contact.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule, CommonModule],
})
export class LoginComponent {

  @Output() loginClicked = new EventEmitter<void>();
  isLoading = false;

  email = '';
  password = '';
  userData: ContactReadDto | null = null;
  errorMessage: string = '';

  constructor(private loginService: ContactService) {}

  onLogin() {
  if (this.isLoading) return;

  this.isLoading = true;
  this.loginService.login(this.email, this.password).subscribe({
    next: (data) => {
      this.userData = data;
      this.errorMessage = '';

      localStorage.setItem('user', JSON.stringify(data));
      this.onLoginClick();
      this.isLoading = false;
    },
    error: (err) => {
      this.userData = null;
      this.errorMessage = err?.error?.message || 'Login failed';
      this.isLoading = false;
    }
  });
}

  onLoginClick() {
    this.loginClicked.emit();
  }
}
