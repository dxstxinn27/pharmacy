import { CategorieI } from "./categorie";
import { LotI } from "./lot";
import { ProviderI } from "./provider";

export interface MedicationI {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;

  // Relaciones
  categoryId: number;
  category?: CategorieI;

  providerId: number;
  provider?: ProviderI;

  lots?: LotI[];
}
