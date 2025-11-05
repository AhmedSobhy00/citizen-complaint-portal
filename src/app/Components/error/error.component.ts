import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
})
export class ErrorComponent {
  constructor(private http: HttpClient, private router: Router) {}

  retry() {
    this.http
      .get('https://localhost:7012/api/contact/health', {
        observe: 'response',
        responseType: 'text',
      })
      .subscribe({
        next: (res) => {
          console.log('Server is back online:', res);
          this.router.navigate([''], { replaceUrl: true });
        },
        error: (err) => {
          console.error('Health check failed:', err);
        },
      });
  }
}
