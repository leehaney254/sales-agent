import { Injectable } from '@angular/core';
import { InvoiceData } from '../../components/invoice/invoice-data';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  url = 'http://localhost:3000/invoices';

  constructor() {}

  async getAllInvoiceData(): Promise<InvoiceData[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
