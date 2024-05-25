import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { CardsComponent } from '../../components/cards/cards.component';
import { Carddata } from '../../components/cards/carddata';
import { CardserviceService } from '../../services/card/cardservice.service';
import { GraphService } from '../../services/bargraph/graph.service';
import { BarchartComponent } from '../../components/barchart/barchart.component';
import { Platform } from '@ionic/angular';
import { PirchartComponent } from '../../components/pirchart/pirchart.component';
import { PiechartService } from '../../services/piechart/piechart.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    CardsComponent,
    BarchartComponent,
    PirchartComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  cardDataList: Carddata[] = [];
  graphDataList: any[] = [];
  view: number[] = [];
  pieDataList: any[] = [];

  cardService: CardserviceService = inject(CardserviceService);
  graphService: GraphService = inject(GraphService);
  pieService: PiechartService = inject(PiechartService);

  constructor(private platform: Platform) {
    this.cardService.getAllCardDataList().then((cardDataList: Carddata[]) => {
      this.cardDataList = cardDataList;
    });
    this.graphService.getAllGraphData().then((graphService: any[]) => {
      this.graphDataList = graphService;
    });
    this.pieService.getAllPieData().then((pieService: any[]) => {
      this.pieDataList = pieService;
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
      this.view = [0.8 * width, 0.8 * height];
    } else {
      this.view = [0.85 * width, 0.85 * height];
    }
  }
}
