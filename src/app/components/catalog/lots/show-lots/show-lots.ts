import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

import { LotService } from '../../../../services/catalog/lot';
import { MedicationService } from '../../../../services/catalog/medication';

import { LotI } from '../../../../models/catalog/lot';
import { MedicationI } from '../../../../models/catalog/medication';

@Component({
  selector: 'app-show-lots',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './show-lots.html',
  styleUrl: './show-lots.css',
  encapsulation: ViewEncapsulation.None
})
export class ShowLots {
  lots: LotI[] = [];
  medsById: Record<number, MedicationI> = {};

  constructor(
    private lotService: LotService,
    private medicationService: MedicationService
  ) {
    this.lotService.lots$.subscribe(list => this.lots = list);
    this.medicationService.medications$.subscribe(meds => {
      this.medsById = Object.fromEntries(meds.map(m => [m.id!, m]));
    });
  }

  medName(id: number): string {
    return this.medsById[id]?.name ?? `#${id}`;
  }
}
