import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Invoices } from './invoices';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [MatButtonModule, MatTableModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css',
})
export class InvoiceComponent {
  @Input() tableData!: Invoices[];
  displayedColumns: String[] = ['name', 'amount_due', 'due_date', 'action'];
}
