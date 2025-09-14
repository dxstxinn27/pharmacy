import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

import { SaleDetailService } from '../../../../services/sales/detail';
import { SaleService } from '../../../../services/sales/sale';
import { MedicationService } from '../../../../services/catalog/medication';
import { CustomerService, CustomerI } from '../../../../services/customers/customer';

import { SaleDetailI } from '../../../../models/sales/detail';
import { MedicationI } from '../../../../models/catalog/medication';
import { SaleI } from '../../../../models/sales/new';

@Component({
  selector: 'app-show-sales-detail',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './show-sales-detail.html',
  styleUrl: './show-sales-detail.css',
  encapsulation: ViewEncapsulation.None
})
export class ShowSalesDetail {
  rows: SaleDetailI[] = [];
  medsById: Record<number, MedicationI> = {};
  salesById: Record<number, SaleI> = {};
  customersById: Record<number, CustomerI> = {};

  constructor(
    private sdService: SaleDetailService,
    private saleService: SaleService,
    private medService: MedicationService,
    private customerService: CustomerService
  ) {
    this.sdService.saleDetails$.subscribe(list => this.rows = list);

    this.medService.medications$.subscribe(meds => {
      this.medsById = Object.fromEntries(meds.map(m => [m.id!, m]));
    });

    this.saleService.sales$.subscribe(sales => {
      this.salesById = Object.fromEntries(sales.map(s => [s.id!, s]));
    });

    this.customerService.customers$.subscribe(cs => {
      this.customersById = Object.fromEntries(cs.map(c => [c.id!, c]));
    });
  }

  medName(id: number): string {
    return this.medsById[id]?.name ?? `#${id}`;
  }

  saleLabel(saleId: number): string {
    const s = this.salesById[saleId];
    if (!s) return `Sale #${saleId}`;
    const c = this.customersById[s.customerId];
    const cname = c ? `${c.firstName} ${c.lastName}` : `Customer #${s.customerId}`;
    return `#${s.id} — ${cname}`;
  }
}
