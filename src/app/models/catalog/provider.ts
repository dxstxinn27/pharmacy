import { MedicationI } from "./medication";

export interface ProviderI {
  id: number;
  name: string;
  contactName: string;
  phone: string;
  email: string;
  address: string;

  // Relación: un proveedor puede tener varios medicamentos
  medications?: MedicationI[];
}
