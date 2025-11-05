import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ProfileComponent } from '../profile/profile.component';
import { LandingComponent } from '../landing/landing.component';
import { HeaderOutComponent } from '../header-out/header-out.component';
import { TokenService } from '../../Services/token.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderInComponent } from '../header-in/header-in.component';
import { SearchComplaintComponent } from '../search-complaint/search-complaint.component';
import { AddComplaintComponent } from '../add-complaint/add-complaint.component';
@Component({
  selector: 'app-main',
  imports: [  LoginComponent,
      RegisterComponent,
      CommonModule,
      FormsModule,
      ProfileComponent,
      LandingComponent,
      HeaderOutComponent,
      HeaderInComponent,
      SearchComplaintComponent,
      AddComplaintComponent
      ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  title = 'CitizenComplaint';
  loginPressed: boolean = false;
  RegisterPressed: boolean = false;
  trackPressed: boolean = false;
  addPressed: boolean = false;
  emailEntered: boolean = false;
  email: string = '';
  constructor(
    private tokenService: TokenService,
    private http: HttpClient 
  ) {}

  isLoggedIn(): boolean {
    return this.tokenService.isTokenValid();
  }
  openLogin() {
    this.loginPressed = true;
  }
  reloadPage() {
  location.reload();
}

  openRegister() {
    this.RegisterPressed = true;
  }
  close() {
    this.loginPressed = false;
    this.trackPressed = false;
    this.addPressed = false;
    this.RegisterPressed = false;
    this.emailEntered = false;
  }
  openSearch() {
    this.trackPressed = true;
  }
  openAddComplaint() {
    this.addPressed = true;
  }
  onContinue() {
    localStorage.setItem('email', this.email);
    this.addPressed = false;
    this.emailEntered = true;
    this.email = '';
  }
  closeRegister() {
    this.RegisterPressed = false;
    this.loginPressed = true;
  }
}
