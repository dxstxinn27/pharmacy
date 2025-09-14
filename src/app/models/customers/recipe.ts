import { MedicationI } from "../catalog/medication";
import { CustomerI } from "./customer-list";

export interface RecipeI {
  id: number;
  dosage: string;
  frequency: string;
  duration: string;

  // Relaciones
  customerId: number;
  customer?: CustomerI;

  medicationId: number;
  medication?: MedicationI;
}
