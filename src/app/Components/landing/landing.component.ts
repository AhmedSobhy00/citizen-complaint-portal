import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  @Output() trackPressed = new EventEmitter<void>();
  @Output() addPressed = new EventEmitter<void>();

      

  onTrackClick() {
    this.trackPressed.emit();
  }
  onaAddClick() {
    this.addPressed.emit();
  }

}
