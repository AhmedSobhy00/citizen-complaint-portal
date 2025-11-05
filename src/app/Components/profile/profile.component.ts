import { Component, OnInit } from '@angular/core';
import {
  ComplaintService,
  ComplaintReadDto,
} from '../../Services/complaint.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddComplaintComponent } from '../add-complaint/add-complaint.component';
@Component({
  selector: 'app-profile',
  imports: [CommonModule, FormsModule, AddComplaintComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  complaints: ComplaintReadDto[] = [];
  firstName: string = '';
  isLoading: boolean = false;
  clicked: boolean = false;
  addPressed: boolean = false;
  constructor(private complaintService: ComplaintService) {}

  getGreeting(): string {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      return 'morning';
    } else if (hour >= 12 && hour < 17) {
      return 'afternoon';
    } else if (hour >= 17 && hour < 22) {
      return 'evening';
    } else {
      return 'night';
    }
  }

  ngOnInit(): void {
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson);
      this.firstName = ` ,${user.fullname?.split(' ')[0] ?? 'User'}`; // Get first name
    }
    this.isLoading = true;
    this.complaintService.getMyComplaints().subscribe({
      next: (res) => {
        this.complaints = res || [];
        this.isLoading = false;
        console.log('Complaints fetched successfully:', this.complaints);
      },
      error: (err) => {
        console.error('Error fetching complaints:', err);
        this.complaints = [];
        this.isLoading = false;
      },
    });
  }
  openAddComplaint() {
    this.addPressed = true;
  }
  close() {
    this.addPressed = false;
     this.ngOnInit();
  }
}
