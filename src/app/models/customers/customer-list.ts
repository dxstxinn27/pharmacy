import { SaleI } from "../sales/new";
import { RecipeI } from "./recipe";

export interface CustomerI {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  status: 'active' | 'inactive';

  // Relación: un cliente puede tener recetas y compras
  recipes?: RecipeI[];
  sales?: SaleI[];
}
