import { SaleI } from "../sales/new";

export interface TaxI {
  id: number;
  name: string;
  percentage: number;
  description: string;

  // Relación: se aplica a ventas
  sales?: SaleI[];
}
