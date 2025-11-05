import { Component } from '@angular/core';
import { ComplaintService, ComplaintReadDto } from '../../Services/complaint.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-complaint',
  imports: [FormsModule , CommonModule],
  templateUrl: './search-complaint.component.html',
  styleUrl: './search-complaint.component.css'
})
export class SearchComplaintComponent {
  result:boolean = false;
  caseNumber = '';
  email = '';
  complaint: ComplaintReadDto | null = null;
  error = '';
  isLoading: boolean = false;


  constructor(private complaintService: ComplaintService) {}

  onSearch() {
    this.isLoading = true;
    this.complaintService.getComplaintByCaseNumber(this.caseNumber, this.email).subscribe({
      next: (res) => {
        this.complaint = res;
        this.error = '';
        this.result = true;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err?.error?.message || 'Complaint not found.';
        this.complaint = null;
        this.result = false;
        this.isLoading = false;
      }
    });
  }
  searchAgain() {
    this.result = false;
    this.caseNumber = '';
    this.email = '';
    this.complaint = null;
    this.error = '';
  }
}
