import { Component, OnInit, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PieData } from './pie-data';

@Component({
  selector: 'app-pirchart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './pirchart.component.html',
  styleUrl: './pirchart.component.css',
})
export class PirchartComponent implements OnInit {
  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme: any = {
    domain: ['#1679ab', '#5AA454', '#E44D25'],
  };

  @Input() single!: PieData[];
  @Input() view!: [number, number];

  onSelect(event: Event) {
    console.log(event);
  }

  constructor() {}

  ngOnInit() {
    this.single;
  }
}
