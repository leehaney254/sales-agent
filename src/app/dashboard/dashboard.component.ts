import { Component, Input } from '@angular/core';
import { DashBoard } from '../dash-board';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  @Input() dashBoard!: DashBoard;
}
