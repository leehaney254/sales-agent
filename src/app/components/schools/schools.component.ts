import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Schools } from './schools';

@Component({
  selector: 'app-schools',
  standalone: true,
  imports: [MatButtonModule, MatTableModule],
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.css',
})
export class SchoolsComponent {
  @Input() schoolsData!: Schools[];
  displayedColumns: String[] = [
    'name',
    'type',
    'product',
    'county',
    'registrationDate',
    'contactInfo',
    'balance',
    'action',
  ];
}
