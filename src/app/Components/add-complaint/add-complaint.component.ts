import { Component } from '@angular/core';
import {
  ComplaintService,
  ComplaintCreateDto,
} from '../../Services/complaint.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TokenService } from '../../Services/token.service';

@Component({
  selector: 'app-add-complaint',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-complaint.component.html',
  styleUrl: './add-complaint.component.css',
})
export class AddComplaintComponent {
  governorates: string[] = [
    'Cairo',
    'Alexandria',
    'Giza',
    'Dakahlia',
    'Sharqia',
    'Qalyubia',
    'Kafr El Sheikh',
    'Gharbia',
    'Monufia',
    'Beheira',
    'Ismailia',
    'Port Said',
    'Suez',
    'Damietta',
    'Fayoum',
    'Beni Suef',
    'Minya',
    'Assiut',
    'Sohag',
    'Qena',
    'Luxor',
    'Aswan',
    'Red Sea',
    'New Valley',
    'Matrouh',
    'North Sinai',
    'South Sinai',
  ];
  sources: string[] = [
    'Home',
    'Public Street',
    'Workplace',
    'School / University',
  ];
  complaintTypes: string[] = [
    'Complaints',
    'Objection',
    'Requests',
    'Reports',
    'Sit-in and Strike',
    'Miscellaneous Topics',
    'Thanks',
    'Inquiry',
    'Suggestion',
  ];
  sectors: string[] = [
    'Water and Sewage',
    'Electricity',
    'Natural Gas',
    'Internet Services',
    'Public Transportation',
    'Waste Management',
    'Traffic Department',
    'Postal Services',
    'Police and Security',
    'Social Services / Pensions',
    'Consumer Protection',
    'Environment',
    'Health',
  ];
  emailForAnonymous = localStorage.getItem('email') || '';
  isSubmitting = false;

  model: ComplaintCreateDto = {
    title: '',
    source: '',
    complaintType: '',
    description: '',
    government: '',
    sector: '',
  };

  message = '';
  error = '';

  constructor(
    private complaintService: ComplaintService,
    private tokenService: TokenService
  ) {}

  onSubmit() {
  this.isSubmitting = true;

  const onSuccess = (res: any) => {
    this.isSubmitting = false;
    this.error = '';
    this.message = res.message;

    const match = res.message.match(/Ticket Number:\s*(CAS-[\w-]+)/);
    if (match) {
      this.ticketNumber = match[1];
    }

    this.model = {
      title: '',
      source: '',
      complaintType: '',
      description: '',
      government: '',
      sector: '',
    };
    this.submitted = true;
  };

  const onError = (err: any) => {
    this.isSubmitting = false;
    this.message = '';
    this.error = err.error?.message || 'Submission failed.';
  };

  if (!this.tokenService.isTokenValid()) {
    const request = {
      email: this.emailForAnonymous,
      complaint: this.model,
    };
    this.complaintService.submitComplaintPublic(request).subscribe({
      next: onSuccess,
      error: onError,
    });
  } else {
    this.complaintService.addComplaint(this.model).subscribe({
      next: onSuccess,
      error: onError,
    });
  }
}
copyTicket() {
  if (this.ticketNumber) {
    navigator.clipboard.writeText(this.ticketNumber);
  }
}

ticketNumber = '';
submitted = false;

}
