import { Component, OnInit, Input } from '@angular/core';
import { NgxChartsModule, LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-barchart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './barchart.component.html',
  styleUrl: './barchart.component.css',
})
export class BarchartComponent implements OnInit {
  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Population';
  legendTitle: string = 'Years';

  colorScheme: any = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA'],
  };

  @Input() barData!: any;
  // @ts-ignore
  @Input() view!: number[];
  legendPosition = LegendPosition.Below;

  onSelect(event: Event) {
    console.log(event);
  }

  onActivate(event: Event): void {
    console.log(event);
  }

  onDeactivate(event: Event): void {
    console.log(event);
  }

  constructor() {}

  ngOnInit() {
    this.barData;
  }
}
