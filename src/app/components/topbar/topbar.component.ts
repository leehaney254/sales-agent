import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SidebarService } from '../../services/sidebar/sidebar.service';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css',
})
export class TopbarComponent {
  constructor(private sidebarService: SidebarService) {}

  openSidebar() {
    this.sidebarService.openSidebar();
  }
}
