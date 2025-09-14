import { SaleI } from "../sales/new";

export interface PaymentI {
  id: number;
  amount: number;
  paymentDate: Date;
  method: string; // "cash", "card", "transfer"

  // Relación: el pago está asociado a una venta
  saleId: number;
  sale?: SaleI;
}
