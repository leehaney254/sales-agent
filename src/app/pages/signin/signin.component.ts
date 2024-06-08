import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  constructor(private router: Router) {}

  handleFormSubmit(event: Event): void {
    event.preventDefault(); // Prevent the default form submission behavior
    // Perform form validation and submission logic here
    this.router.navigate(['/dashboard']); // Navigate to the dashboard
  }
}
