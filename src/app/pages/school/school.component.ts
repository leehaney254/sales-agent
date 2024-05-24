import { Component } from '@angular/core';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-school',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './school.component.html',
  styleUrl: './school.component.css',
})
export class SchoolComponent {}
