import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./Components/login/login.component";
import { RegisterComponent } from "./Components/register/register.component";
import { ProfileComponent } from "./Components/profile/profile.component";

@Component({
  selector: 'app-root',
  imports: [ LoginComponent, RegisterComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CitizenComplaint';
}
