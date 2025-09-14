import { MedicationI } from "./medication";

export interface CategorieI {
  id: number;
  name: string;
  description: string;

  // Relación: una categoría puede tener varios medicamentos
  medications?: MedicationI[];
}
