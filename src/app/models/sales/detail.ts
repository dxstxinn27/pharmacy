import { MedicationI } from "../catalog/medication";
import { SaleI } from "./new";

export interface SaleDetailI {
  id: number;
  quantity: number;
  price: number;
  subtotal: number;

  // Relaciones
  saleId: number;
  sale?: SaleI;

  medicationId: number;
  medication?: MedicationI;
}
