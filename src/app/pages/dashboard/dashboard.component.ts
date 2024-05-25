import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CardsComponent } from '../../components/cards/cards.component';
import { Carddata } from '../../components/cards/carddata';
import { CardserviceService } from '../../services/cardservice.service';
import { GraphService } from '../../services/graph.service';
import { BarchartComponent } from '../../components/barchart/barchart.component';
import { Platform } from '@ionic/angular';

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
  view: number[] = [];

  cardService: CardserviceService = inject(CardserviceService);
  graphService: GraphService = inject(GraphService);

  constructor(private platform: Platform) {
    this.cardService.getAllCardDataList().then((cardDataList: Carddata[]) => {
      this.cardDataList = cardDataList;
    });
    this.graphService.getAllGraphData().then((graphService: any[]) => {
      this.graphDataList = graphService;
    });
  }

  //check for screen change so as to resize our graphs
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.handleScreenSizeChange();
  }

  // function to handle screen chage
  handleScreenSizeChange(): void {
    const width = this.platform.width();
    const height = this.platform.height();
    if (width > height) {
      this.view = [0.9 * width, 0.9 * height];
    } else {
      this.view = [0.95 * width, 0.95 * height];
    }
  }
}
