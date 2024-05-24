import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CardsComponent } from '../../components/cards/cards.component';
import { Carddata } from '../../components/cards/carddata';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent, CardsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  cardDataList: Carddata[] = [
    { name: 'Collection', value: 12500, icon: 'monetization_on' },
    { name: 'Signups', value: 200, icon: 'people' },
    { name: 'Total Revenue', value: 34500, icon: 'attach_money' },
    { name: 'Bounced Checks', value: 10, icon: 'undo' },
  ];
}
