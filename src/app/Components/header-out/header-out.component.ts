import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-out',
  imports: [],
  templateUrl: './header-out.component.html',
  styleUrl: './header-out.component.css'
})
export class HeaderOutComponent {
  @Output() loginClicked = new EventEmitter<void>();
  @Output() registerClicked = new EventEmitter<void>();


  onLoginClick() {
    this.loginClicked.emit();
  }
  onRegisterClick() {
    this.registerClicked.emit();
  }
}
