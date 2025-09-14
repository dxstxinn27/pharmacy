import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

import { RecipeService, RecipeI } from '../../../../services/customers/recipe';
import { CustomerService, CustomerI } from '../../../../services/customers/customer';
import { MedicationService } from '../../../../services/catalog/medication';
import { MedicationI } from '../../../../models/catalog/medication';

@Component({
  selector: 'app-show-recipes',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './show-recipes.html',
  styleUrl: './show-recipes.css',
  encapsulation: ViewEncapsulation.None
})
export class ShowRecipes {
  recipes: RecipeI[] = [];
  customersById: Record<number, CustomerI> = {};
  medsById: Record<number, MedicationI> = {};

  constructor(
    private recipeService: RecipeService,
    private customerService: CustomerService,
    private medicationService: MedicationService
  ) {
    this.recipeService.recipes$.subscribe(list => this.recipes = list);
    this.customerService.customers$.subscribe(list => {
      this.customersById = Object.fromEntries(list.map(c => [c.id!, c]));
    });
    this.medicationService.medications$.subscribe(list => {
      this.medsById = Object.fromEntries(list.map(m => [m.id!, m]));
    });
  }

  customerName(id: number): string {
    const c = this.customersById[id];
    return c ? `${c.firstName} ${c.lastName}` : `#${id}`;
  }
  medName(id: number): string {
    return this.medsById[id]?.name ?? `#${id}`;
  }
}
