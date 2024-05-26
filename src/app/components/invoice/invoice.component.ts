import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { InvoiceData } from './invoice-data';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [MatButtonModule, MatTableModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css',
})
export class InvoiceComponent {
  @Input() tableData!: InvoiceData[];
  displayedColumns: String[] = ['name', 'amount_due', 'due_date', 'action'];
}
