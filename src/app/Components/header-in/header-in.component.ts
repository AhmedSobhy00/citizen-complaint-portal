import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../Services/token.service';
@Component({
  selector: 'app-header-in',
  imports: [CommonModule],
  templateUrl: './header-in.component.html',
  styleUrl: './header-in.component.css'
})
export class HeaderInComponent {
  constructor(private tokenService: TokenService) {}

  logout() {
    
    this.tokenService.clearToken();
  }
}
