import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CardsComponent } from '../../components/cards/cards.component';
import { Carddata } from '../../components/cards/carddata';
import { CardserviceService } from '../../services/cardservice.service';
import { GraphService } from '../../services/graph.service';
import { BarchartComponent } from '../../components/barchart/barchart.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent, CardsComponent, BarchartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  cardDataList: Carddata[] = [];
  graphDataList: any[] = [];

  cardService: CardserviceService = inject(CardserviceService);
  graphService: GraphService = inject(GraphService);

  constructor() {
    this.cardService.getAllCardDataList().then((cardDataList: Carddata[]) => {
      this.cardDataList = cardDataList;
    });
    this.graphService.getAllGraphData().then((graphService: any[]) => {
      this.graphDataList = graphService;
    });
  }
}
