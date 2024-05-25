import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  url = 'http://localhost:3000/invoices';

  constructor() {}

  async getAllInvoiceData(): Promise<any[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
}
