import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

import { ExpirationsService } from '../../../../services/reports/expiration';
import { ExpirationI } from '../../../../models/reports/expiration';

import { MedicationService } from '../../../../services/catalog/medication';
import { LotService } from '../../../../services/catalog/lot';
import { MedicationI } from '../../../../models/catalog/medication';
import { LotI } from '../../../../models/catalog/lot';

@Component({
  selector: 'app-show-expirations',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './show-expirations.html',
  styleUrl: './show-expirations.css',
  encapsulation: ViewEncapsulation.None
})
export class ShowExpirations {
  rows: ExpirationI[] = [];
  medsById: Record<number, MedicationI> = {};
  lotsById: Record<number, LotI> = {};

  constructor(
    private expService: ExpirationsService,
    private medService: MedicationService,
    private lotService: LotService
  ) {
    this.expService.expirations$.subscribe(list => this.rows = list);

    this.medService.medications$.subscribe(meds => {
      this.medsById = Object.fromEntries(meds.map(m => [m.id!, m]));
    });

    this.lotService.lots$.subscribe(lots => {
      this.lotsById = Object.fromEntries(lots.map(l => [l.id!, l]));
    });
  }

  medName(id: number): string {
    return this.medsById[id]?.name ?? `#${id}`;
  }

  lotCode(id: number): string {
    return this.lotsById[id]?.code ?? `#${id}`;
  }
}
