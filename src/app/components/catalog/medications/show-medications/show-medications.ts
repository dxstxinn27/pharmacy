import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

import { MedicationService } from '../../../../services/catalog/medication';
import { CategoriesService } from '../../../../services/catalog/categorie';
import { ProviderService } from '../../../../services/catalog/provider';

import { MedicationI } from '../../../../models/catalog/medication';
import { CategorieI } from '../../../../models/catalog/categorie';
import { ProviderI } from '../../../../models/catalog/provider';

@Component({
  selector: 'app-show-medications',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './show-medications.html',
  styleUrl: './show-medications.css',
  encapsulation: ViewEncapsulation.None
})
export class ShowMedications {
  meds: MedicationI[] = [];
  categories: Record<number, CategorieI> = {};
  providers: Record<number, ProviderI> = {};

  constructor(
    private medicationService: MedicationService,
    private categoriesService: CategoriesService,
    private providerService: ProviderService
  ) {
    // Cargar meds
    this.medicationService.medications$.subscribe(list => this.meds = list);

    // Mapas para mostrar nombres por ID
    this.categoriesService.categories$.subscribe(list => {
      this.categories = Object.fromEntries(list.map(c => [c.id!, c]));
    });
    this.providerService.providers$.subscribe(list => {
      this.providers = Object.fromEntries(list.map(p => [p.id!, p]));
    });
  }

  catName(id: number): string {
    return this.categories[id]?.name ?? `#${id}`;
  }
  provName(id: number): string {
    return this.providers[id]?.name ?? `#${id}`;
  }
}
