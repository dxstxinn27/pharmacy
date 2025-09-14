import { LotI } from "../catalog/lot";
import { MedicationI } from "../catalog/medication";

export interface ExpirationI {
  id: number;
  expirationDate: Date;
  quantity: number;

  // Relación: reporte vinculado a un medicamento y a un lote
  medicationId: number;
  medication?: MedicationI;

  lotId: number;
  lot?: LotI;
}
