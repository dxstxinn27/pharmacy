import { SaleI } from "../sales/new";

export interface SalesSummaryI {
  id: number;
  totalSales: number;
  totalAmount: number;
  startDate: Date;
  endDate: Date;

  // Relación: un resumen se genera de muchas ventas
  sales?: SaleI[];
}
