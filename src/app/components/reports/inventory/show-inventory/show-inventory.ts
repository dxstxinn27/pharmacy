import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { InventoryService } from '../../../../services/reports/inventory';
import { InventoryI } from '../../../../models/reports/inventory';
import { MedicationService } from '../../../../services/catalog/medication';
import { MedicationI } from '../../../../models/catalog/medication';

@Component({
  selector: 'app-show-inventory',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule, FormsModule],
  templateUrl: './show-inventory.html',
  styleUrl: './show-inventory.css',
  encapsulation: ViewEncapsulation.None
})
export class ShowInventory {
  rows: InventoryI[] = [];
  medsById: Record<number, MedicationI> = {};
  filterText: string = '';

  constructor(
    private invService: InventoryService,
    private medService: MedicationService
  ) {
    this.invService.inventories$.subscribe(list => this.rows = list);
    this.medService.medications$.subscribe(meds => {
      this.medsById = Object.fromEntries(meds.map(m => [m.id!, m]));
    });
  }

  medName(id: number): string {
    return this.medsById[id]?.name ?? `#${id}`;
  }

  belowMin(r: InventoryI): boolean {
    return Number(r.currentStock) < Number(r.minimumStock);
  }

  // Getter para aplicar el filtro
  get filteredRows(): InventoryI[] {
    const q = (this.filterText || '').toLowerCase().trim();
    if (!q) return this.rows;

    return this.rows.filter(r =>
      (this.medName(r.medicationId) || '').toLowerCase().includes(q)
    );
  }
}
