import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

import { SaleService } from '../../../../services/sales/sale';
import { SaleI } from '../../../../models/sales/new';
import { CustomerService, CustomerI } from '../../../../services/customers/customer';

@Component({
  selector: 'app-show-sales',
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule, RouterModule],
  templateUrl: './show-sales.html',
  styleUrl: './show-sales.css',
  encapsulation: ViewEncapsulation.None
})
export class ShowSales {
  sales: SaleI[] = [];
  customersById: Record<number, CustomerI> = {};

  constructor(
    private saleService: SaleService,
    private customerService: CustomerService
  ) {
    this.saleService.sales$.subscribe(list => (this.sales = list));
    this.customerService.customers$.subscribe(list => {
      this.customersById = Object.fromEntries(list.map(c => [c.id!, c]));
    });
  }

  customerName(id: number): string {
    const c = this.customersById[id];
    return c ? `${c.firstName} ${c.lastName}` : `#${id}`;
  }

  itemsCount(sale: SaleI): number {
    return sale.details?.reduce((acc, d) => acc + d.quantity, 0) ?? 0;
  }
}
