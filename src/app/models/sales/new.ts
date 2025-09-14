import { CustomerI } from "../customers/customer-list";
import { PaymentI } from "../payments/payment";
import { SaleDetailI } from "./detail";

export interface SaleI {
  id: number;
  saleDate: Date;
  totalAmount: number;

  // Relaciones
  customerId: number;
  customer?: CustomerI;

  details?: SaleDetailI[];
  payments?: PaymentI[];
}
