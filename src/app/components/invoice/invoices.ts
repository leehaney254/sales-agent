export interface Invoices {
  id: number;
  invoiceNumber: string;
  invoiceItem: string;
  creationDate: string;
  paidAmount: number;
  amount: number;
  dueDate: string;
  balance: number;
  completionStatus: string;
  collections: number[];
}
