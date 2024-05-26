export interface InvoiceData {
  id: number;
  schoolId: number;
  invoiceNumber: string;
  invoiceItem: string;
  creationDate: string;
  dueDate: string;
  amount: number;
  paidAmount: number;
  balance: number;
  completionStatus: string;
  daysUntilDue: number;
  collections: number[];
}
