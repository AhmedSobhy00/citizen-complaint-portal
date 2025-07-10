import { Component, OnInit } from '@angular/core';
import { ComplaintService, ComplaintReadDto } from '../../Services/complaint.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-profile',
  imports: [CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  complaints: ComplaintReadDto[] = [];

  constructor(private complaintService: ComplaintService) {}

  ngOnInit(): void {
    this.complaintService.getMyComplaints().subscribe({
      next: (res) => {
        this.complaints = res;
        console.log('Complaints fetched successfully:', this.complaints);
        
      },
      error: (err) => {
        console.error('Error fetching complaints:', err);
      }
    });
  }
}
