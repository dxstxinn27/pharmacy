import { MedicationI } from "../catalog/medication";

export interface InventoryI {
  id: number;
  currentStock: number;
  minimumStock: number;

  // Relación: inventario por medicamento
  medicationId: number;
  medication?: MedicationI;
}
