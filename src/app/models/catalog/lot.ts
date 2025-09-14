import { MedicationI } from "./medication";

export interface LotI {
  id: number;
  code: string;
  quantity: number;
  manufactureDate: Date;
  expirationDate: Date;

  // Relación: cada lote pertenece a un medicamento
  medicationId: number;
  medication?: MedicationI;
}
